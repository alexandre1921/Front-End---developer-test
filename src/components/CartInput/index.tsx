import Component from './component';
import useController from './controller';
import { ExternalProps } from './types';

export default (props: ExternalProps) => useController(Component, props);
