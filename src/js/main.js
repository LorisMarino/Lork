import CustomSelect from './components/CustomSelect'
import Accordion from './components/Accordion'
import CustomFile from './components/CustomFile'
import CustomRange from './components/CustomRange'

const $customSelects = Array.from(document.querySelectorAll('.custom-select'))
for (const $customSelect of $customSelects) {
  new CustomSelect($customSelect)
}

const $accordions = Array.from(document.querySelectorAll('.accordion'))
for (const $accordion of $accordions) {
  new Accordion($accordion)
}

const $customFiles = Array.from(document.querySelectorAll('.custom-file'))
for (const $customFile of $customFiles) {
  new CustomFile($customFile)
}

const $customRanges = Array.from(document.querySelectorAll('.custom-range'))
for (const $customRange of $customRanges) {
  new CustomRange($customRange)
}
