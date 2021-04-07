using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudfw
{
    /// <summary>Properties for defining a `ALIYUN::CLOUDFW::AddressBook`.</summary>
    [JsiiInterface(nativeType: typeof(IRosAddressBookProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.RosAddressBookProps")]
    public interface IRosAddressBookProps
    {
        /// <remarks>
        /// <strong>Property</strong>: description: Address book description.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Description
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: groupName: Name Address book.
        /// </remarks>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: groupType: Type the address book, the optional values ​​are:
        /// ip: IP Address Book
        /// domain: domain name address book
        /// port: Port Address Book
        /// tag: ECS label address book
        /// </remarks>
        [JsiiProperty(name: "groupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: addressList: Address list of the address book, between multiple addresses separated by commas.
        /// Note: When GroupType ip, it must be set to port or domain.
        /// When GroupType as ip, address list, fill in the IP address. For example: 1.2.3.4/32, 1.2.3.0/24
        /// When GroupType for the port, the address list to fill in ports or port ranges. For example: 80, 100/200
        /// When GroupType for the domain, the domain name to fill in the address list. For example: demo1.aliyun.com, demo2.aliyun.com
        /// </remarks>
        [JsiiProperty(name: "addressList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AddressList
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: autoAddTagEcs: Whether to automatically add new ECS public network IP matching tags to the address book. Default to false.
        /// </remarks>
        [JsiiProperty(name: "autoAddTagEcs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoAddTagEcs
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: regionId: Region ID. Default to cn-hangzhou.
        /// </remarks>
        [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RegionId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tagList:
        /// </remarks>
        [JsiiProperty(name: "tagList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cloudfw.RosAddressBook.TagListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TagList
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tagRelation: The relationship between the labels to be matched more ECS.
        /// and: the relationship between multiple labels "and" that matches both ECS IP public network more tags will be added to the address book.
        /// or: a plurality of inter-labeled "or" relationship, i.e., as long as a matching tag ECS ​​public IP address book will be added.
        /// </remarks>
        [JsiiProperty(name: "tagRelation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TagRelation
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::CLOUDFW::AddressBook`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosAddressBookProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.RosAddressBookProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudfw.IRosAddressBookProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Address book description.
            /// </remarks>
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Description
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: groupName: Name Address book.
            /// </remarks>
            [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: groupType: Type the address book, the optional values ​​are:
            /// ip: IP Address Book
            /// domain: domain name address book
            /// port: Port Address Book
            /// tag: ECS label address book
            /// </remarks>
            [JsiiProperty(name: "groupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: addressList: Address list of the address book, between multiple addresses separated by commas.
            /// Note: When GroupType ip, it must be set to port or domain.
            /// When GroupType as ip, address list, fill in the IP address. For example: 1.2.3.4/32, 1.2.3.0/24
            /// When GroupType for the port, the address list to fill in ports or port ranges. For example: 80, 100/200
            /// When GroupType for the domain, the domain name to fill in the address list. For example: demo1.aliyun.com, demo2.aliyun.com
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "addressList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AddressList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: autoAddTagEcs: Whether to automatically add new ECS public network IP matching tags to the address book. Default to false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoAddTagEcs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoAddTagEcs
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: regionId: Region ID. Default to cn-hangzhou.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RegionId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tagList:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tagList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cloudfw.RosAddressBook.TagListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? TagList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tagRelation: The relationship between the labels to be matched more ECS.
            /// and: the relationship between multiple labels "and" that matches both ECS IP public network more tags will be added to the address book.
            /// or: a plurality of inter-labeled "or" relationship, i.e., as long as a matching tag ECS ​​public IP address book will be added.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tagRelation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TagRelation
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
