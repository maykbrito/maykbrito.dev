import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import ptBr from "dayjs/locale/pt-br"
dayjs.extend(relativeTime)
dayjs.locale(ptBr)

export { dayjs }
