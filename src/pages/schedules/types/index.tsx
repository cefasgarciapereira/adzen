export interface Schedule {
    id: string
    adId: string
    date: string
    status: 'paused' | 'active' | 'canceled'
}

export type HandleScheduleChangeParams =
    | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    | { name: string; value: any }
