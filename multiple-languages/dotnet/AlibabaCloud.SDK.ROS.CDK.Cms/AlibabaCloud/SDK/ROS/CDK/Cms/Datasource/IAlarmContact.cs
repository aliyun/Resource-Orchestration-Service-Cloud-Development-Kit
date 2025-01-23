using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms.Datasource
{
    /// <summary>Represents a `AlarmContact`.</summary>
    [JsiiInterface(nativeType: typeof(IAlarmContact), fullyQualifiedName: "@alicloud/ros-cdk-cms.datasource.IAlarmContact")]
    public interface IAlarmContact : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AlarmContactName: AlarmContactName.</summary>
        [JsiiProperty(name: "attrAlarmContactName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAlarmContactName
        {
            get;
        }

        /// <summary>Attribute ChannelsAliIm: ChannelsAliIM.</summary>
        [JsiiProperty(name: "attrChannelsAliIm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrChannelsAliIm
        {
            get;
        }

        /// <summary>Attribute ChannelsDingWebHook: ChannelsDingWebHook.</summary>
        [JsiiProperty(name: "attrChannelsDingWebHook", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrChannelsDingWebHook
        {
            get;
        }

        /// <summary>Attribute ChannelsMail: ChannelsMail.</summary>
        [JsiiProperty(name: "attrChannelsMail", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrChannelsMail
        {
            get;
        }

        /// <summary>Attribute ChannelsSms: ChannelsSMS.</summary>
        [JsiiProperty(name: "attrChannelsSms", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrChannelsSms
        {
            get;
        }

        /// <summary>Attribute ChannelsStateAliIm: ChannelsStateAliIM.</summary>
        [JsiiProperty(name: "attrChannelsStateAliIm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrChannelsStateAliIm
        {
            get;
        }

        /// <summary>Attribute ChannelsStateDingWebHook: ChannelsStateDingWebHook.</summary>
        [JsiiProperty(name: "attrChannelsStateDingWebHook", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrChannelsStateDingWebHook
        {
            get;
        }

        /// <summary>Attribute ChannelsStateMail: ChannelsStateMail.</summary>
        [JsiiProperty(name: "attrChannelsStateMail", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrChannelsStateMail
        {
            get;
        }

        /// <summary>Attribute ChannelsStateSms: ChannelsStateSMS.</summary>
        [JsiiProperty(name: "attrChannelsStateSms", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrChannelsStateSms
        {
            get;
        }

        /// <summary>Attribute ContactGroups: ContactGroups.</summary>
        [JsiiProperty(name: "attrContactGroups", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrContactGroups
        {
            get;
        }

        /// <summary>Attribute CreateTime: CreateTime.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute Describe: Describe.</summary>
        [JsiiProperty(name: "attrDescribe", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescribe
        {
            get;
        }

        /// <summary>Attribute Lang: The language type of the alarm.</summary>
        [JsiiProperty(name: "attrLang", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLang
        {
            get;
        }

        /// <summary>Attribute UpdateTime: UpdateTime.</summary>
        [JsiiProperty(name: "attrUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUpdateTime
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cms.datasource.AlarmContactProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cms.Datasource.IAlarmContactProps Props
        {
            get;
        }

        /// <summary>Represents a `AlarmContact`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAlarmContact), fullyQualifiedName: "@alicloud/ros-cdk-cms.datasource.IAlarmContact")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.Datasource.IAlarmContact
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AlarmContactName: AlarmContactName.</summary>
            [JsiiProperty(name: "attrAlarmContactName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAlarmContactName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ChannelsAliIm: ChannelsAliIM.</summary>
            [JsiiProperty(name: "attrChannelsAliIm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrChannelsAliIm
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ChannelsDingWebHook: ChannelsDingWebHook.</summary>
            [JsiiProperty(name: "attrChannelsDingWebHook", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrChannelsDingWebHook
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ChannelsMail: ChannelsMail.</summary>
            [JsiiProperty(name: "attrChannelsMail", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrChannelsMail
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ChannelsSms: ChannelsSMS.</summary>
            [JsiiProperty(name: "attrChannelsSms", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrChannelsSms
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ChannelsStateAliIm: ChannelsStateAliIM.</summary>
            [JsiiProperty(name: "attrChannelsStateAliIm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrChannelsStateAliIm
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ChannelsStateDingWebHook: ChannelsStateDingWebHook.</summary>
            [JsiiProperty(name: "attrChannelsStateDingWebHook", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrChannelsStateDingWebHook
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ChannelsStateMail: ChannelsStateMail.</summary>
            [JsiiProperty(name: "attrChannelsStateMail", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrChannelsStateMail
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ChannelsStateSms: ChannelsStateSMS.</summary>
            [JsiiProperty(name: "attrChannelsStateSms", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrChannelsStateSms
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ContactGroups: ContactGroups.</summary>
            [JsiiProperty(name: "attrContactGroups", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrContactGroups
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: CreateTime.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Describe: Describe.</summary>
            [JsiiProperty(name: "attrDescribe", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescribe
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Lang: The language type of the alarm.</summary>
            [JsiiProperty(name: "attrLang", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLang
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UpdateTime: UpdateTime.</summary>
            [JsiiProperty(name: "attrUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUpdateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cms.datasource.AlarmContactProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cms.Datasource.IAlarmContactProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cms.Datasource.IAlarmContactProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
