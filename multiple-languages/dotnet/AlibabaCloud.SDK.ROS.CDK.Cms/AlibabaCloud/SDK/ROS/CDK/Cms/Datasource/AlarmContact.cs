using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms.Datasource
{
    /// <summary>This class encapsulates and extends the ROS resource type `DATASOURCE::CMS::AlarmContact`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAlarmContact`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-alarmcontact
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cms.Datasource.AlarmContact), fullyQualifiedName: "@alicloud/ros-cdk-cms.datasource.AlarmContact", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-cms.datasource.AlarmContactProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class AlarmContact : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Cms.Datasource.IAlarmContact
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public AlarmContact(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cms.Datasource.IAlarmContactProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cms.Datasource.IAlarmContactProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected AlarmContact(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected AlarmContact(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute AlarmContactName: AlarmContactName.</summary>
        [JsiiProperty(name: "attrAlarmContactName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAlarmContactName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ChannelsAliIm: ChannelsAliIm.</summary>
        [JsiiProperty(name: "attrChannelsAliIm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrChannelsAliIm
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ChannelsDingWebHook: ChannelsDingWebHook.</summary>
        [JsiiProperty(name: "attrChannelsDingWebHook", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrChannelsDingWebHook
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ChannelsMail: ChannelsMail.</summary>
        [JsiiProperty(name: "attrChannelsMail", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrChannelsMail
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ChannelsSms: ChannelsSMS.</summary>
        [JsiiProperty(name: "attrChannelsSms", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrChannelsSms
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ChannelsStateAliIm: ChannelsStateAliIm.</summary>
        [JsiiProperty(name: "attrChannelsStateAliIm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrChannelsStateAliIm
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ChannelsStateDingWebHook: ChannelsStateDingWebHook.</summary>
        [JsiiProperty(name: "attrChannelsStateDingWebHook", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrChannelsStateDingWebHook
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ChannelsStateMail: ChannelsStateMail.</summary>
        [JsiiProperty(name: "attrChannelsStateMail", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrChannelsStateMail
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ChannelsStateSms: ChannelsStateSMS.</summary>
        [JsiiProperty(name: "attrChannelsStateSms", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrChannelsStateSms
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ContactGroups: ContactGroups.</summary>
        [JsiiProperty(name: "attrContactGroups", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrContactGroups
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CreateTime: CreateTime.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCreateTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Describe: Describe.</summary>
        [JsiiProperty(name: "attrDescribe", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDescribe
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Lang: The language type of the alarm.</summary>
        [JsiiProperty(name: "attrLang", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrLang
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute UpdateTime: UpdateTime.</summary>
        [JsiiProperty(name: "attrUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrUpdateTime
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cms.datasource.AlarmContactProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Cms.Datasource.IAlarmContactProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cms.Datasource.IAlarmContactProps>()!;
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
