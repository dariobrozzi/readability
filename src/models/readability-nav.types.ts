export interface NavOption {
  label: string,
  description: string,
  className?: string,
  selected?: boolean
}

export interface NavGroup {
  label: string,
  options: NavOption[]
}

export interface SwapClass {
  currentClass: string,
  newClass: string
}
