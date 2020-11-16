import { Construct } from './construct-compat';
import { RosElement } from './ros-element';

export class RosInfo extends RosElement {
  static formatVersion = 'ROSTemplateFormatVersion'; 
  static description = 'Description'; 
  static metadata = 'Metadata'; 

  static v20150901 = '2015-09-01';

  private readonly _value: string | {};
  private readonly infoType: string;
  /**
   * Creates properties for this stack.
   * @param scope The parent construct.
   * @param props The value of the property.
   */
  constructor(scope: Construct, id: string, info: string | {[key: string]: any}) {
    super(scope, id);
    if(id !== RosInfo.formatVersion && id !== RosInfo.description && id !== RosInfo.metadata) {
      throw new Error(`The RosInfo id should be in these following scopes: formatVersion, description, Metadata.\n
        Use RosInfo.formatVersion, RosInfo.description and RosInfo.metadata to assign this parameter.
      `);
    }

    if(id === RosInfo.formatVersion && info !== RosInfo.v20150901) {
      throw new Error(`If you want to define the format version, you should use RosInfo.vXXXXX.\n
        ROS CDK support the folloowing version: RosInfo.v20150901
      `);
    }
    this.infoType = id;
    this._value = info;
  }

  /**
   * @internal
   */
  public _toRosTemplate(): object {
    const temp: { [key: string]: string | {} } = {};
    temp[this.infoType] = this._value;
    return temp;
  }
}
