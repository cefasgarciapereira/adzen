import { useState } from 'react'
import { Plus } from 'lucide-react'

import Typography from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import NewSchedule from './components/new-schedule'
import { HandleScheduleChangeParams, Schedule } from './types'
import { ScheduleTable } from './components/schedule-table'

const initialSchedule: Schedule = {
    id: '',
    adId: '',
    date: '',
    status: 'paused',
}

function newId(): string {
    return `${new Date().toISOString()}_${Math.random()}`
}

export default function SchedulesPage() {
    const [schedules, setSchedules] = useState<Array<Schedule>>([])
    const [isNewScheduleOpen, setIsNewScheduleOpen] = useState(false)
    const [schedule, setSchedule] = useState<Schedule>(initialSchedule)

    function handleScheduleChange(e: HandleScheduleChangeParams) {
        if ('target' in e) {
            setSchedule({ ...schedule, [e.target.name]: e.target.value })
        } else {
            setSchedule({ ...schedule, [e.name]: e.value })
        }
    }

    function handleSubmit() {
        if (!schedule.id) {
            setSchedules([...schedules, { ...schedule, id: newId() }])
        } else {
            setSchedules([
                ...schedules.filter((item) => item.id !== schedule.id),
                schedule,
            ])
        }

        setSchedule(initialSchedule)
        setIsNewScheduleOpen(false)
    }

    function handleDelete(schedule: Schedule) {
        setSchedules(schedules.filter((item) => item.id !== schedule.id))
    }

    function handleEdit(schedule: Schedule) {
        setSchedule(schedule)
        setIsNewScheduleOpen(true)
    }

    return (
        <div>
            {!(schedules.length > 0) && (
                <Typography.Muted>
                    Você ainda não possui agendamentos
                </Typography.Muted>
            )}
            {schedules.length > 0 && (
                <ScheduleTable
                    schedules={schedules}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />
            )}
            <div className="flex flex-row-reverse mt-8">
                <Button onClick={() => setIsNewScheduleOpen(true)}>
                    <Plus />
                    Novo Agendamento
                </Button>
                {isNewScheduleOpen && (
                    <Button
                        onClick={() => setIsNewScheduleOpen(false)}
                        variant="ghost"
                        className="mr-4"
                    >
                        Fechar
                    </Button>
                )}
            </div>
            {isNewScheduleOpen && (
                <NewSchedule
                    onChange={handleScheduleChange}
                    schedule={schedule}
                />
            )}
            {isNewScheduleOpen && (
                <div className="flex flex-row-reverse mt-8">
                    <Button onClick={handleSubmit}>Agendar</Button>
                </div>
            )}
        </div>
    )
}
