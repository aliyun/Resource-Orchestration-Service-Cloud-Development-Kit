using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudfw
{
    /// <summary>Represents a `AddressBook`.</summary>
    [JsiiInterface(nativeType: typeof(IAddressBook), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.IAddressBook")]
    public interface IAddressBook : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute GroupUuid: After a successful return to the address book to add unique identification ID.</summary>
        [JsiiProperty(name: "attrGroupUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGroupUuid
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cloudfw.AddressBookProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cloudfw.IAddressBookProps Props
        {
            get;
        }

        /// <summary>Represents a `AddressBook`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAddressBook), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.IAddressBook")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudfw.IAddressBook
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute GroupUuid: After a successful return to the address book to add unique identification ID.</summary>
            [JsiiProperty(name: "attrGroupUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGroupUuid
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cloudfw.AddressBookProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cloudfw.IAddressBookProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cloudfw.IAddressBookProps>()!;
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
