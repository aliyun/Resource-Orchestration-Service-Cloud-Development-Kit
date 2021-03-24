using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::AnycastEIPAssociation`.</summary>
    [JsiiInterface(nativeType: typeof(IAnycastEIPAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.AnycastEIPAssociationProps")]
    public interface IAnycastEIPAssociationProps
    {
        /// <summary>Property anycastId: Anycast EIP instance ID.</summary>
        [JsiiProperty(name: "anycastId", typeJson: "{\"primitive\":\"string\"}")]
        string AnycastId
        {
            get;
        }

        /// <summary>Property bindInstanceId: The ID of the cloud resource instance to be bound.</summary>
        [JsiiProperty(name: "bindInstanceId", typeJson: "{\"primitive\":\"string\"}")]
        string BindInstanceId
        {
            get;
        }

        /// <summary>Property bindInstanceRegionId: The region ID of the cloud resource instance to be bound.</summary>
        [JsiiProperty(name: "bindInstanceRegionId", typeJson: "{\"primitive\":\"string\"}")]
        string BindInstanceRegionId
        {
            get;
        }

        /// <summary>Property bindInstanceType: The cloud resource instance type to be bound.</summary>
        /// <remarks>
        /// Valid value: SlbInstance, SLB instance of private network type.
        /// </remarks>
        [JsiiProperty(name: "bindInstanceType", typeJson: "{\"primitive\":\"string\"}")]
        string BindInstanceType
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::VPC::AnycastEIPAssociation`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAnycastEIPAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.AnycastEIPAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IAnycastEIPAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property anycastId: Anycast EIP instance ID.</summary>
            [JsiiProperty(name: "anycastId", typeJson: "{\"primitive\":\"string\"}")]
            public string AnycastId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property bindInstanceId: The ID of the cloud resource instance to be bound.</summary>
            [JsiiProperty(name: "bindInstanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string BindInstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property bindInstanceRegionId: The region ID of the cloud resource instance to be bound.</summary>
            [JsiiProperty(name: "bindInstanceRegionId", typeJson: "{\"primitive\":\"string\"}")]
            public string BindInstanceRegionId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property bindInstanceType: The cloud resource instance type to be bound.</summary>
            /// <remarks>
            /// Valid value: SlbInstance, SLB instance of private network type.
            /// </remarks>
            [JsiiProperty(name: "bindInstanceType", typeJson: "{\"primitive\":\"string\"}")]
            public string BindInstanceType
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
