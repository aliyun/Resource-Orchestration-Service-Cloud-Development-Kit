using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudfw.Datasource
{
    /// <summary>Represents a `AddressBook`.</summary>
    [JsiiInterface(nativeType: typeof(IAddressBook), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.datasource.IAddressBook")]
    public interface IAddressBook : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AddressList: The addresses in the address book.</summary>
        [JsiiProperty(name: "attrAddressList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAddressList
        {
            get;
        }

        /// <summary>Attribute AddressListCount: The number of addresses in the address book.</summary>
        [JsiiProperty(name: "attrAddressListCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAddressListCount
        {
            get;
        }

        /// <summary>Attribute AutoAddTagEcs: Indicates whether the public IP addresses of ECS instances are automatically added to the address book if the instances match the specified tags.</summary>
        [JsiiProperty(name: "attrAutoAddTagEcs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAutoAddTagEcs
        {
            get;
        }

        /// <summary>Attribute Description: The description of the address book.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute GroupName: The name of the address book.</summary>
        [JsiiProperty(name: "attrGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGroupName
        {
            get;
        }

        /// <summary>Attribute GroupType: The type of the address book.</summary>
        [JsiiProperty(name: "attrGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGroupType
        {
            get;
        }

        /// <summary>Attribute GroupUuid: The UUID of the address book.</summary>
        [JsiiProperty(name: "attrGroupUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGroupUuid
        {
            get;
        }

        /// <summary>Attribute ReferenceCount: The number of times that the address book is referenced.</summary>
        [JsiiProperty(name: "attrReferenceCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReferenceCount
        {
            get;
        }

        /// <summary>Attribute TagRelation: The logical relationship among ECS tags.</summary>
        [JsiiProperty(name: "attrTagRelation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTagRelation
        {
            get;
        }

        /// <summary>Attribute Tags: The details about the ECS tags that can be automatically added to the address book.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cloudfw.datasource.AddressBookProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cloudfw.Datasource.IAddressBookProps Props
        {
            get;
        }

        /// <summary>Represents a `AddressBook`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAddressBook), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.datasource.IAddressBook")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudfw.Datasource.IAddressBook
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AddressList: The addresses in the address book.</summary>
            [JsiiProperty(name: "attrAddressList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAddressList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AddressListCount: The number of addresses in the address book.</summary>
            [JsiiProperty(name: "attrAddressListCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAddressListCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AutoAddTagEcs: Indicates whether the public IP addresses of ECS instances are automatically added to the address book if the instances match the specified tags.</summary>
            [JsiiProperty(name: "attrAutoAddTagEcs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAutoAddTagEcs
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The description of the address book.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute GroupName: The name of the address book.</summary>
            [JsiiProperty(name: "attrGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute GroupType: The type of the address book.</summary>
            [JsiiProperty(name: "attrGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGroupType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute GroupUuid: The UUID of the address book.</summary>
            [JsiiProperty(name: "attrGroupUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGroupUuid
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ReferenceCount: The number of times that the address book is referenced.</summary>
            [JsiiProperty(name: "attrReferenceCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReferenceCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TagRelation: The logical relationship among ECS tags.</summary>
            [JsiiProperty(name: "attrTagRelation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTagRelation
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: The details about the ECS tags that can be automatically added to the address book.</summary>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cloudfw.datasource.AddressBookProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cloudfw.Datasource.IAddressBookProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cloudfw.Datasource.IAddressBookProps>()!;
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
