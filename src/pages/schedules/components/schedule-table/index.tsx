import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Schedule } from '../../types'
import Typography from '@/components/ui/typography'
import { Button } from '@/components/ui/button'

interface ScheduleTableProps {
    schedules: Schedule[]
    onDelete: (schedule: Schedule) => void
    onEdit: (schedule: Schedule) => void
}

export function ScheduleTable(props: ScheduleTableProps) {
    return (
        <Table>
            <TableCaption>Agendamentos criados</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Ad Id</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {props.schedules.map((schedule, index) => (
                    <TableRow key={`${schedule.adId}-${index}`}>
                        <TableCell className="font-medium">
                            {schedule.adId}
                        </TableCell>
                        <TableCell>{schedule.date}</TableCell>
                        <TableCell>
                            O status será alterado para{' '}
                            <Typography.Code>{schedule.status}</Typography.Code>
                        </TableCell>
                        <div>
                            <TableCell>
                                <Button
                                    variant="ghost"
                                    onClick={() => props.onEdit(schedule)}
                                >
                                    Editar
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button
                                    variant="ghost"
                                    onClick={() => props.onDelete(schedule)}
                                >
                                    Excluir
                                </Button>
                            </TableCell>
                        </div>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
