import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { FooType } from '../../types/ExampleType';

import styles from './ExampleComponent.module.css';
import sharedStyles from '../shared/Shared.module.css';

type CustomProps = {
    foo: FooType
}

type Props = RouteComponentProps & CustomProps

type State = {
    bar: string;
}

class ExampleComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            bar: "defaultValue"
        }
    }

    render() {
        return (
            // You can assign a class to an element like this
            <div className={styles.ExampleClass}>
                {/* And assign multiple like this */}
                <div className={`${styles.ExampleClass} ${sharedStyles.SharedClass}`}>
                    Make cool shit :)
                </div>
            </div>
        )
    }
}

export default withRouter(ExampleComponent);