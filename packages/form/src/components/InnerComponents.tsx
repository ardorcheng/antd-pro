import { DatePicker, Input, Select, Switch, TreeSelect } from 'antd';
import ProRadio from './ProRadio';
import ProCheckbox from './ProCheckbox';
import withFieldDefault from './withFieldDefault';
import { FieldProps } from '../shared/schema';

const ProSelect = withFieldDefault(Select, (props: FieldProps) => ({
  showSearch: true,
  filterOption: (input, option: any) => option?.label?.toLowerCase().indexOf(input.toLowerCase()) >= 0,
  options: props.data,
}));

const ProMultipleSelect = withFieldDefault(Select, (props: FieldProps) => ({
  showSearch: true,
  mode: 'multiple',
  filterOption: (input, option: any) => option?.label?.toLowerCase().indexOf(input.toLowerCase()) >= 0,
  options: props.data,
}));

const ProTreeSelect = withFieldDefault(TreeSelect, (props: FieldProps) => ({
  treeData: props.data,
  treeCheckable: true,
  showCheckedStrategy: TreeSelect.SHOW_PARENT,
  treeDataSimpleMode: true,
  multiple: true,
  showSearch: true,
  treeNodeFilterProp: 'title',
}));

const ProDatePicker = withFieldDefault(DatePicker, {
  showTime: true,
  format: 'YYYY-MM-DD HH:mm:ss',
});

const ProDateRangePicker = withFieldDefault(DatePicker.RangePicker, {
  format: 'YYYY-MM-DD HH:mm:ss',
});

const ProDateTimeRangePicker = withFieldDefault(DatePicker.RangePicker, {
  showTime: true,
  format: 'YYYY-MM-DD HH:mm:ss',
});

const ProTimeRangePicker = withFieldDefault(DatePicker.RangePicker, {
  showTime: true,
  format: 'YYYY-MM-DD HH:mm:ss',
});

const ProSwitch = withFieldDefault(Switch, (props: FieldProps) => ({
  checked: props.value,
}));

const ProRadioButton = withFieldDefault(ProRadio, (props: FieldProps) => ({
  optionType: 'button',
  options: props.data,
}));

const InnerComponents = {
  input: Input,
  select: ProSelect,
  multipleSelect: ProMultipleSelect,
  radio: ProRadio,
  radioButton: ProRadioButton,
  checkbox: ProCheckbox,
  treeSelect: ProTreeSelect,
  datePicker: ProDatePicker,
  dateRangePicker: ProDateRangePicker,
  dateTimeRangePicker: ProDateTimeRangePicker,
  timeRangePicker: ProTimeRangePicker,
  switch: ProSwitch,
};

export default InnerComponents;
