import * as ros from '@alicloud/ros-cdk-core';
import { RosPage } from './esa.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPage as PageProperty };

/**
 * Properties for defining a `Page`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-page
 */
export interface PageProps {

    /**
     * Property contentType: The Content-Type field in the HTTP header. Valid values:
     * text\/html
     * application\/json
     */
    readonly contentType: string | ros.IResolvable;

    /**
     * Property pageName: The name of the custom response page.
     */
    readonly pageName: string | ros.IResolvable;

    /**
     * Property content: The Base64-encoded page content. Example: "PGh0bWw+aGVsbG8gcGFnZTwvaHRtbD4=", which indicates "hello page".
     */
    readonly content?: string | ros.IResolvable;

    /**
     * Property description: The description of the page.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Represents a `Page`.
 */
export interface IPage extends ros.IResource {
    readonly props: PageProps;

    /**
     * Attribute Content: The Base64-encoded content of the error page. The content type is specified by the Content-Type field.
     */
    readonly attrContent: ros.IResolvable | string;

    /**
     * Attribute ContentType: The Content-Type field in the HTTP header.
     */
    readonly attrContentType: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the custom error page.
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute Kind: The type of the custom response page.
     */
    readonly attrKind: ros.IResolvable | string;

    /**
     * Attribute PageId: The ID of the custom error page.
     */
    readonly attrPageId: ros.IResolvable | string;

    /**
     * Attribute PageName: The name of the custom response page.
     */
    readonly attrPageName: ros.IResolvable | string;

    /**
     * Attribute UpdateTime: The time when the custom error page was last modified.
     */
    readonly attrUpdateTime: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::Page`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPage`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-page
 */
export class Page extends ros.Resource implements IPage {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: PageProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Content: The Base64-encoded content of the error page. The content type is specified by the Content-Type field.
     */
    public readonly attrContent: ros.IResolvable | string;

    /**
     * Attribute ContentType: The Content-Type field in the HTTP header.
     */
    public readonly attrContentType: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the custom error page.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute Kind: The type of the custom response page.
     */
    public readonly attrKind: ros.IResolvable | string;

    /**
     * Attribute PageId: The ID of the custom error page.
     */
    public readonly attrPageId: ros.IResolvable | string;

    /**
     * Attribute PageName: The name of the custom response page.
     */
    public readonly attrPageName: ros.IResolvable | string;

    /**
     * Attribute UpdateTime: The time when the custom error page was last modified.
     */
    public readonly attrUpdateTime: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PageProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosPage = new RosPage(this, id,  {
            description: props.description,
            contentType: props.contentType,
            content: props.content,
            pageName: props.pageName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPage;
        this.attrContent = rosPage.attrContent;
        this.attrContentType = rosPage.attrContentType;
        this.attrDescription = rosPage.attrDescription;
        this.attrKind = rosPage.attrKind;
        this.attrPageId = rosPage.attrPageId;
        this.attrPageName = rosPage.attrPageName;
        this.attrUpdateTime = rosPage.attrUpdateTime;
    }
}
