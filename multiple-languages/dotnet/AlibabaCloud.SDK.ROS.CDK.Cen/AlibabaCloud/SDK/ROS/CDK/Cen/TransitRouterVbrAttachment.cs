using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::CEN::TransitRouterVbrAttachment`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTransitRouterVbrAttachment`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervbrattachment
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cen.TransitRouterVbrAttachment), fullyQualifiedName: "@alicloud/ros-cdk-cen.TransitRouterVbrAttachment", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-cen.TransitRouterVbrAttachmentProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class TransitRouterVbrAttachment : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterVbrAttachment
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public TransitRouterVbrAttachment(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterVbrAttachmentProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterVbrAttachmentProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected TransitRouterVbrAttachment(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected TransitRouterVbrAttachment(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute AutoPublishRouteEnabled: AutoPublishRouteEnabled.</summary>
        [JsiiProperty(name: "attrAutoPublishRouteEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAutoPublishRouteEnabled
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CenId: CenId.</summary>
        [JsiiProperty(name: "attrCenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCenId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ClientToken: ClientToken.</summary>
        [JsiiProperty(name: "attrClientToken", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrClientToken
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ResourceType: ResourceType.</summary>
        [JsiiProperty(name: "attrResourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrResourceType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute TransitRouterAttachmentDescription: TransitRouterAttachmentDescription.</summary>
        [JsiiProperty(name: "attrTransitRouterAttachmentDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTransitRouterAttachmentDescription
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute TransitRouterAttachmentId: The first ID of the resource.</summary>
        [JsiiProperty(name: "attrTransitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTransitRouterAttachmentId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute TransitRouterAttachmentName: TransitRouterAttachmentName.</summary>
        [JsiiProperty(name: "attrTransitRouterAttachmentName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTransitRouterAttachmentName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute TransitRouterId: TransitRouterId.</summary>
        [JsiiProperty(name: "attrTransitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTransitRouterId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VbrId: VbrId.</summary>
        [JsiiProperty(name: "attrVbrId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVbrId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VbrOwnerId: VbrOwnerId.</summary>
        [JsiiProperty(name: "attrVbrOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVbrOwnerId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cen.TransitRouterVbrAttachmentProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterVbrAttachmentProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterVbrAttachmentProps>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        protected virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        protected virtual string Id
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.Construct Scope
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Construct>()!;
            set => SetInstanceProperty(value);
        }
    }
}
