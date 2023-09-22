'use client'
import React, { useEffect, Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { DotsVerticalIcon } from '@heroicons/react/outline'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'


import {
    add,
    eachDayOfInterval,
    endOfMonth,
    format,
    getDay,
    isEqual,
    isSameDay,
    isSameMonth,
    isToday,
    parse,
    parseISO,
    startOfToday
} from 'date-fns'

import EventsData from "@/app/components/data/EventsData";

const  classNames = (...classes: any)  => {
    return classes.filter(Boolean).join(' ')
}

const Events = () => {
    let today = startOfToday()
    let [selectedDay, setSelectedDay] = useState(today)
    let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
    let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

    const [hours, setHours] = useState(new Date().getHours());
    const [minutes, setMinutes] = useState(new Date().getMinutes());
    const [seconds, setSeconds] = useState(new Date().getSeconds());

    useEffect(() => {
        const updateTimer = () => {
        // Update seconds and handle rollover
        setSeconds((prevSeconds) => {
            const newSeconds = prevSeconds + 1;
            if (newSeconds === 60) {
            // If seconds reach 60, reset to 0 and increment minutes
            setMinutes((prevMinutes) => {
                const newMinutes = prevMinutes + 1;
                if (newMinutes === 60) {
                // If minutes reach 60, reset to 0 and increment hours
                setHours((prevHours) => (prevHours + 1) % 24);
                }
                return newMinutes;
            });
            return 0;
            }
            return newSeconds;
        });
        };

        // Update the timer immediately when the component mounts
        updateTimer();

        // Start the interval after the initial update
        const timer = setInterval(updateTimer, 1000);

        return () => clearInterval(timer);
    }, []);

    // Format the time for display
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    let days = eachDayOfInterval({
        start: firstDayCurrentMonth,
        end: endOfMonth(firstDayCurrentMonth),
    })

    const previousMonth = ()=> {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }

    const nextMonth = ()=> {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }

    let selectedDayEvents = EventsData.filter((meeting) =>
        isSameDay(parseISO(meeting.startDatetime), selectedDay)
    )

    return (
        <div className="pt-16">
            <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
                <h1 className="text-6xl font-bold text-center mb-12">
                    <span id="clock">{formattedTime}</span>
                </h1>
            </div>
            <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
                <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
                    <div className="md:pr-14">
                        <div className="flex items-center">
                            <h2 className="flex-auto font-semibold text-gray-900"> {format(firstDayCurrentMonth, 'MMMM yyyy')} </h2>
                            <button type="button" onClick={previousMonth} className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500" >
                                <span className="sr-only"> Previous month </span>
                                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
                            </button>
                            <button onClick={nextMonth} type="button" className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500" >
                                <span className="sr-only"> Next month </span>
                                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
                            </button>
                        </div>
                        <div className = "grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
                            <div> Sun </div> <div> Mon </div> <div> Tue </div> <div> Wed </div> <div> Thu </div> <div> Fri </div> <div> Sat </div>
                        </div>
                        <div className = "grid grid-cols-7 mt-2 text-sm">
                            {days.map((day, dayIdx) => (
                                <div key = {day.toString()} className = {classNames( dayIdx === 0 && colStartClasses[getDay(day)], 'py-1.5' )}>
                                    <button
                                        type = "button"
                                        onClick = {() => setSelectedDay(day)}
                                        className = {
                                            classNames(
                                                isEqual(day, selectedDay) && 'text-white',
                                                !isEqual(day, selectedDay) && isToday(day) && 'text-red-500',
                                                !isEqual(day, selectedDay) && !isToday(day) && isSameMonth(day, firstDayCurrentMonth) && 'text-gray-900',
                                                !isEqual(day, selectedDay) && !isToday(day) && !isSameMonth(day, firstDayCurrentMonth) && 'text-gray-400',
                                                isEqual(day, selectedDay) && isToday(day) && 'bg-red-500',
                                                isEqual(day, selectedDay) && !isToday(day) && 'bg-gray-900',
                                                !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                                                (isEqual(day, selectedDay) || isToday(day)) && 'font-semibold', 'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                                            )
                                        }>
                                        <time dateTime = {format(day, 'yyyy-MM-dd')}> {format(day, 'd')} </time>
                                    </button>
                                    <div className="w-1 h-1 mx-auto mt-1">
                                        {EventsData.some((meeting) => isSameDay(parseISO(meeting.startDatetime), day) ) && ( <div className="w-1 h-1 rounded-full bg-sky-500"></div> )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <section className="mt-12 md:mt-0 md:pl-14">
                        <h3 className="font-semibold text-gray-900">
                            Schedule for{' '}
                            <time dateTime = {format(selectedDay, 'yyyy-MM-dd')}> {format(selectedDay, 'MMM dd, yyy')} </time>
                        </h3>
                        <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
                            {selectedDayEvents.length > 0 ? ( selectedDayEvents.map((meeting) => ( <Meeting meeting={meeting} key={meeting.id} /> ))) : (<p>No Events for today.</p>)}
                        </ol>
                    </section>
                </div>
            </div>
        </div>
    )
}

const Meeting = ({ meeting }: any) => {
    let startDateTime = parseISO(meeting.startDatetime)
    let endDateTime = parseISO(meeting.endDatetime)

    return (
        <li className="flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100">
            <img src={meeting.imageUrl} alt="" className="flex-none w-10 h-10 rounded-full"/>
            <div className="flex-auto">
                <p className="text-gray-900">{meeting.name}</p>
                <p className="mt-0.5">
                    <time dateTime = {meeting.startDatetime}> {format(startDateTime, 'h:mm a')} </time>{' '}-{' '}
                    <time dateTime = {meeting.endDatetime}> {format(endDateTime, 'h:mm a')} </time>
                </p>
            </div>
            <Menu as="div" className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100" >
                <div>
                    <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
                        <span className="sr-only">Open options</span>
                        <DotsVerticalIcon className="w-6 h-6" aria-hidden="true" />
                    </Menu.Button>
                </div>

                <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95"
                >   <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    type="button"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Edit
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    type="button"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Cancel
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
                </Transition>
            </Menu>
        </li>
    )
}

let colStartClasses = [ '', 'col-start-2', 'col-start-3', 'col-start-4', 'col-start-5', 'col-start-6', 'col-start-7']

export default Events