using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vod.Datasource
{
    /// <summary>This class encapsulates and extends the ROS resource type `DATASOURCE::VOD::MessageCallback`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMessageCallback`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-messagecallback
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Vod.Datasource.MessageCallback), fullyQualifiedName: "@alicloud/ros-cdk-vod.datasource.MessageCallback", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-vod.datasource.MessageCallbackProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class MessageCallback : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Vod.Datasource.IMessageCallback
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public MessageCallback(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Vod.Datasource.IMessageCallbackProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Vod.Datasource.IMessageCallbackProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected MessageCallback(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected MessageCallback(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute AppId: The ID of the application.</summary>
        [JsiiProperty(name: "attrAppId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAppId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AuthKey: The cryptographic key.</summary>
        /// <remarks>
        /// This parameter is returned only for HTTP callbacks.
        /// </remarks>
        [JsiiProperty(name: "attrAuthKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAuthKey
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AuthSwitch: Indicates whether callback authentication is enabled.</summary>
        /// <remarks>
        /// This parameter is returned only for HTTP callbacks.
        /// </remarks>
        [JsiiProperty(name: "attrAuthSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAuthSwitch
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CallbackType: The callback method.</summary>
        [JsiiProperty(name: "attrCallbackType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCallbackType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CallbackUrl: The callback URL.</summary>
        /// <remarks>
        /// This parameter is returned only for HTTP callbacks.
        /// </remarks>
        [JsiiProperty(name: "attrCallbackUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCallbackUrl
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EventTypeList: The type of the callback event.</summary>
        [JsiiProperty(name: "attrEventTypeList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEventTypeList
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MnsEndpoint: The public endpoint of MNS.</summary>
        /// <remarks>
        /// This parameter is returned only for MNS callbacks.
        /// </remarks>
        [JsiiProperty(name: "attrMnsEndpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMnsEndpoint
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MnsQueueName: The name of the Message Service (MNS) queue.</summary>
        /// <remarks>
        /// This parameter is returned only for MNS callbacks.
        /// </remarks>
        [JsiiProperty(name: "attrMnsQueueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMnsQueueName
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vod.datasource.MessageCallbackProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Vod.Datasource.IMessageCallbackProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vod.Datasource.IMessageCallbackProps>()!;
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
