const rules = Intl.PluralRules('pl-PL');

interface PlurarSettings {
  one: string;
  few: string;
  many: string;
  zero?: string;
  two?: string;
  other?: string;
}

type Entity = 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'years';

const TimeAndDates: Record<Entity, PlurarSettings> = {
  seconds: { one: 'sekunda', few: 'sekundy', many: 'sekund' },
  minutes: { one: 'minuta', few: 'minuty', many: 'minut' },
  hours: { one: 'godzina', few: 'godziny', many: 'godzin' },
  days: { one: 'dzień', few: 'dni', many: 'dni' },
  weeks: { one: 'tydzień', few: 'tygodnie', many: 'tygodni' },
  years: { one: 'rok', few: 'lata', many: 'lat' }
};

export const getPluralForm = (entity: Entity, number: number): string =>
  TimeAndDates[entity][rules.select(number)] || '';
