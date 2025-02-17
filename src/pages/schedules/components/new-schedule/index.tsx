import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectItem,
} from '@/components/ui/select'
import { HandleScheduleChangeParams, Schedule } from '../../types'

interface NewScheduleProps {
    schedule: Schedule
    onChange: (e: HandleScheduleChangeParams) => void
}

export default function NewSchedule(props: NewScheduleProps) {
    return (
        <div className="py-8 flex flex-col gap-4 items-start">
            <Label htmlFor="adId">Ad ID</Label>
            <Input
                placeholder="Ad ID. Ex: 6639259020810"
                type="text"
                id="adId"
                name="adId"
                value={props.schedule.adId}
                onChange={props.onChange}
            />

            <Label htmlFor="date">Data</Label>
            <Input
                placeholder="Data do disparo da ação"
                type="date"
                id="date"
                name="date"
                value={props.schedule.date}
                onChange={props.onChange}
            />

            <Label htmlFor="status">Status</Label>
            <Select
                value={props.schedule.status}
                onValueChange={(value) => {
                    props.onChange({ name: 'status', value: value })
                }}
            >
                <SelectTrigger>
                    <SelectValue placeholder="Escolha o status desejado" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Status</SelectLabel>
                        <SelectItem value="active">Ativo</SelectItem>
                        <SelectItem value="paused">Pausado</SelectItem>
                        <SelectItem value="canceled">Cancelado</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
