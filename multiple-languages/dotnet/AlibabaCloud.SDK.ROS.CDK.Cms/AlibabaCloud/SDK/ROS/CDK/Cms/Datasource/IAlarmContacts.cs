using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms.Datasource
{
    /// <summary>Represents a `AlarmContacts`.</summary>
    [JsiiInterface(nativeType: typeof(IAlarmContacts), fullyQualifiedName: "@alicloud/ros-cdk-cms.datasource.IAlarmContacts")]
    public interface IAlarmContacts : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AlarmContactNames: The list of alarm contact names.</summary>
        [JsiiProperty(name: "attrAlarmContactNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAlarmContactNames
        {
            get;
        }

        /// <summary>Attribute AlarmContacts: The list of alarm contacts.</summary>
        [JsiiProperty(name: "attrAlarmContacts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAlarmContacts
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cms.datasource.AlarmContactsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cms.Datasource.IAlarmContactsProps Props
        {
            get;
        }

        /// <summary>Represents a `AlarmContacts`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAlarmContacts), fullyQualifiedName: "@alicloud/ros-cdk-cms.datasource.IAlarmContacts")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.Datasource.IAlarmContacts
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AlarmContactNames: The list of alarm contact names.</summary>
            [JsiiProperty(name: "attrAlarmContactNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAlarmContactNames
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AlarmContacts: The list of alarm contacts.</summary>
            [JsiiProperty(name: "attrAlarmContacts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAlarmContacts
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cms.datasource.AlarmContactsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cms.Datasource.IAlarmContactsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cms.Datasource.IAlarmContactsProps>()!;
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
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
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
