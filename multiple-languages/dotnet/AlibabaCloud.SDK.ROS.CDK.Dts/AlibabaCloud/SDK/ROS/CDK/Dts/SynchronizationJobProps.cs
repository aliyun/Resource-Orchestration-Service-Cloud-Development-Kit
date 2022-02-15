using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::DTS::SynchronizationJob`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.SynchronizationJobProps")]
    public class SynchronizationJobProps : AlibabaCloud.SDK.ROS.CDK.Dts.ISynchronizationJobProps
    {
        /// <summary>Property destinationEndpoint: Migration target configuration.</summary>
        [JsiiProperty(name: "destinationEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob.DestinationEndpointProperty\"}]}}")]
        public object DestinationEndpoint
        {
            get;
            set;
        }

        /// <summary>Property destRegion: Region where the synchronization target instance is located.</summary>
        [JsiiProperty(name: "destRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DestRegion
        {
            get;
            set;
        }

        /// <summary>Property sourceEndpoint: Migration source configuration.</summary>
        [JsiiProperty(name: "sourceEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob.SourceEndpointProperty\"}]}}")]
        public object SourceEndpoint
        {
            get;
            set;
        }

        /// <summary>Property sourceRegion: Region where the synchronization source instance is located.</summary>
        [JsiiProperty(name: "sourceRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SourceRegion
        {
            get;
            set;
        }

        /// <summary>Property synchronizationJobClass: Synchronous instance specifications, which can be: micro, small, medium, large and so on.</summary>
        /// <remarks>
        /// The default value is: small
        /// </remarks>
        [JsiiProperty(name: "synchronizationJobClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SynchronizationJobClass
        {
            get;
            set;
        }

        /// <summary>Property dataInitialization: Whether to perform full data initialization before synchronization.</summary>
        /// <remarks>
        /// The values include:true: means full data initialization
        /// false: no full data initialization
        /// The default value is: true
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dataInitialization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DataInitialization
        {
            get;
            set;
        }

        /// <summary>Property networkType: When synchronization geographies, the type of data transmission network used.</summary>
        /// <remarks>
        /// Value include: Internet, Intranet. The default value is: Internet
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "networkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? NetworkType
        {
            get;
            set;
        }

        /// <summary>Property payType: Payment type, which include: Postpaid: postpaid type, Prepaid: Prepaid type.</summary>
        /// <remarks>
        /// Default is Postpaid
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PayType
        {
            get;
            set;
        }

        /// <summary>Property period: If prepaid payment type, then the parameters specified in the purchase package instance or instances as examples of a monthly subscription, which can be: Year: Annual, Month: monthly.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Period
        {
            get;
            set;
        }

        /// <summary>Property structureInitialization: Whether to initialize the structure object before synchronization.</summary>
        /// <remarks>
        /// The values include:true: indicates that the structure object is initialized
        /// false: no result object initialization
        /// The default value is: true
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "structureInitialization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? StructureInitialization
        {
            get;
            set;
        }

        /// <summary>Property synchronizationObjects: Objects that need to be synchronized.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "synchronizationObjects", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob.SynchronizationObjectsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? SynchronizationObjects
        {
            get;
            set;
        }

        /// <summary>Property topology: Synchronous topology, the value includes: oneway, bidirectional.the default value is: oneway, only MySQL-&gt; MySQL synchronization, this parameter can receive the value bidirectional.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "topology", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Topology
        {
            get;
            set;
        }

        /// <summary>Property usedTime: f the payment type is prepaid, then this parameter is the length of the purchase, and parameters such as 1, 2, 3 can be passed in as needed.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "usedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? UsedTime
        {
            get;
            set;
        }
    }
}
