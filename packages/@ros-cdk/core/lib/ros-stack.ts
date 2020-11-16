import {
  stringToRosTemplate,
  listMapper,
  hashMapper,
  numberToRosTemplate,
  rosTagToRosTemplate,
  canInspect,
} from "./runtime";
import { Construct } from "./construct-compat";
import { TagManager } from "./tag-manager";
import { RosTag } from "./ros-tag";
import { RosResource } from "./ros-resource";
import { IResolvable } from "./resolvable";
import { TagType } from "./tag-manager";

export interface RosStackProps {
  readonly templateBody?: string;
  readonly templateUrl?: string;
  readonly parameters?: { [key: string]: string } | IResolvable;
  readonly tags?: RosTag[];
  readonly timeoutMins?: number;
}

function rosStackPropsToRosTemplate(properties: any): any {
  if (!canInspect(properties)) {
    return properties;
  }
  return {
    TemplateBody: stringToRosTemplate(properties.templateBody),
    TemplateURL: stringToRosTemplate(properties.templateUrl),
    NotificationARNs: listMapper(stringToRosTemplate)(
      properties.notificationArns
    ),
    Parameters: hashMapper(stringToRosTemplate)(properties.parameters),
    Tags: listMapper(rosTagToRosTemplate)(properties.tags),
    TimeoutMins: numberToRosTemplate(properties.timeoutMins),
  };
}

export class RosStack extends RosResource {
  public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROS::Stack";
  public templateUrl?: string;
  public parameters: { [key: string]: string } | IResolvable | undefined;
  public readonly tags: TagManager;
  public timeoutMins: number | undefined;
  public templateBody?: string;

  constructor(scope: Construct, id: string, props: RosStackProps) {
    super(scope, id, {
      type: RosStack.ROS_RESOURCE_TYPE_NAME,
      properties: props,
    });

    this.templateBody = props.templateBody;
    this.templateUrl = props.templateUrl;
    this.parameters = props.parameters;
    this.tags = new TagManager(
      TagType.STANDARD,
      "ALIYUN::ROS::Stack",
      props.tags,
      { tagPropertyName: "tags" }
    );
    this.timeoutMins = props.timeoutMins;
  }

  protected get rosProperties(): { [key: string]: any } {
    return {
      templateBody: this.templateBody,
      templateUrl: this.templateUrl,
      parameters: this.parameters,
      tags: this.tags.renderTags(),
      timeoutMins: this.timeoutMins,
    };
  }
  protected renderProperties(props: {
    [key: string]: any;
  }): { [key: string]: any } {
    return rosStackPropsToRosTemplate(props);
  }
}
