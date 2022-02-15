using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudfw
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CLOUDFW::AddressBook`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cloudfw.AddressBookProps")]
    public class AddressBookProps : AlibabaCloud.SDK.ROS.CDK.Cloudfw.IAddressBookProps
    {
        /// <summary>Property description: Address book description.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Description
        {
            get;
            set;
        }

        /// <summary>Property groupName: Name Address book.</summary>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object GroupName
        {
            get;
            set;
        }

        /// <summary>Property groupType: Type the address book, the optional values ​​are: ip: IP Address Book domain: domain name address book port: Port Address Book tag: ECS label address book.</summary>
        [JsiiProperty(name: "groupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object GroupType
        {
            get;
            set;
        }

        /// <summary>Property addressList: Address list of the address book, between multiple addresses separated by commas.</summary>
        /// <remarks>
        /// Note: When GroupType ip, it must be set to port or domain.
        /// When GroupType as ip, address list, fill in the IP address. For example: 1.2.3.4/32, 1.2.3.0/24
        /// When GroupType for the port, the address list to fill in ports or port ranges. For example: 80, 100/200
        /// When GroupType for the domain, the domain name to fill in the address list. For example: demo1.aliyun.com, demo2.aliyun.com
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "addressList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AddressList
        {
            get;
            set;
        }

        /// <summary>Property autoAddTagEcs: Whether to automatically add new ECS public network IP matching tags to the address book.</summary>
        /// <remarks>
        /// Default to false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoAddTagEcs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AutoAddTagEcs
        {
            get;
            set;
        }

        /// <summary>Property regionId: Region ID.</summary>
        /// <remarks>
        /// Default to cn-hangzhou.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RegionId
        {
            get;
            set;
        }

        /// <summary>Property tagList:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "tagList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cloudfw.RosAddressBook.TagListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? TagList
        {
            get;
            set;
        }

        /// <summary>Property tagRelation: The relationship between the labels to be matched more ECS.</summary>
        /// <remarks>
        /// and: the relationship between multiple labels "and" that matches both ECS IP public network more tags will be added to the address book.
        /// or: a plurality of inter-labeled "or" relationship, i.e., as long as a matching tag ECS ​​public IP address book will be added.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tagRelation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? TagRelation
        {
            get;
            set;
        }
    }
}
