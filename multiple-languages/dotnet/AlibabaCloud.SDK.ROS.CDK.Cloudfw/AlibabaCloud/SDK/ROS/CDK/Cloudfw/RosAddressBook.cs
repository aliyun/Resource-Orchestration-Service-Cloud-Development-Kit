using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudfw
{
    /// <summary>A ROS template type:  `ALIYUN::CLOUDFW::AddressBook`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cloudfw.RosAddressBook), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.RosAddressBook", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-cloudfw.RosAddressBookProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosAddressBook : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::CLOUDFW::AddressBook`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosAddressBook(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cloudfw.IRosAddressBookProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosAddressBook(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosAddressBook(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]", isOverride: true)]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Cloudfw.RosAddressBook))!;

        /// <remarks>
        /// <strong>Attribute</strong>: GroupUuid: After a successful return to the address book to add unique identification ID.
        /// </remarks>
        [JsiiProperty(name: "attrGroupUuid", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrGroupUuid
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Address book description.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string Description
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: groupName: Name Address book.
        /// </remarks>
        [JsiiProperty(name: "groupName", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string GroupName
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: groupType: Type the address book, the optional values ​​are:
        /// ip: IP Address Book
        /// domain: domain name address book
        /// port: Port Address Book
        /// tag: ECS label address book
        /// </remarks>
        [JsiiProperty(name: "groupType", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string GroupType
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: addressList: Address list of the address book, between multiple addresses separated by commas.
        /// Note: When GroupType ip, it must be set to port or domain.
        /// When GroupType as ip, address list, fill in the IP address. For example: 1.2.3.4/32, 1.2.3.0/24
        /// When GroupType for the port, the address list to fill in ports or port ranges. For example: 80, 100/200
        /// When GroupType for the domain, the domain name to fill in the address list. For example: demo1.aliyun.com, demo2.aliyun.com
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "addressList", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? AddressList
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: autoAddTagEcs: Whether to automatically add new ECS public network IP matching tags to the address book. Default to false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoAddTagEcs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? AutoAddTagEcs
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: regionId: Region ID. Default to cn-hangzhou.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "regionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? RegionId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: tagList:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tagList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cloudfw.RosAddressBook.TagListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? TagList
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: tagRelation: The relationship between the labels to be matched more ECS.
        /// and: the relationship between multiple labels "and" that matches both ECS IP public network more tags will be added to the address book.
        /// or: a plurality of inter-labeled "or" relationship, i.e., as long as a matching tag ECS ​​public IP address book will be added.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tagRelation", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? TagRelation
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(ITagListProperty), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.RosAddressBook.TagListProperty")]
        public interface ITagListProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: tagKey: ECS labels to be matched Key.
            /// </remarks>
            [JsiiProperty(name: "tagKey", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? TagKey
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: tagValue: ECS tag value to be matched.
            /// </remarks>
            [JsiiProperty(name: "tagValue", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? TagValue
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ITagListProperty), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.RosAddressBook.TagListProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudfw.RosAddressBook.ITagListProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: tagKey: ECS labels to be matched Key.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "tagKey", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? TagKey
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: tagValue: ECS tag value to be matched.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "tagValue", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? TagValue
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-cloudfw.RosAddressBook.TagListProperty")]
        public class TagListProperty : AlibabaCloud.SDK.ROS.CDK.Cloudfw.RosAddressBook.ITagListProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: tagKey: ECS labels to be matched Key.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tagKey", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? TagKey
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: tagValue: ECS tag value to be matched.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tagValue", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? TagValue
            {
                get;
                set;
            }
        }
    }
}
