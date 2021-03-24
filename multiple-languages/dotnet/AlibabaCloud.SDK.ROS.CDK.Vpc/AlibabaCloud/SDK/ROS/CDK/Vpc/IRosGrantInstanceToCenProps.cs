using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::GrantInstanceToCen`.</summary>
    [JsiiInterface(nativeType: typeof(IRosGrantInstanceToCenProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosGrantInstanceToCenProps")]
    public interface IRosGrantInstanceToCenProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cenId: The ID of the CEN instance to be authorized.
        /// </remarks>
        [JsiiProperty(name: "cenId", typeJson: "{\"primitive\":\"string\"}")]
        string CenId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: cenOwnerId: The UID of the account to which the target CEN instance belongs.
        /// </remarks>
        [JsiiProperty(name: "cenOwnerId", typeJson: "{\"primitive\":\"number\"}")]
        double CenOwnerId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the network instance.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceType: The type of the network instance. Valid values:
        /// VPC: Virtual Private Cloud (VPC).
        /// VBR: Virtual Border Router (VBR).
        /// CCN: Cloud Connect Network (CCN).
        /// </remarks>
        [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceType
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::VPC::GrantInstanceToCen`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosGrantInstanceToCenProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosGrantInstanceToCenProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosGrantInstanceToCenProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: cenId: The ID of the CEN instance to be authorized.
            /// </remarks>
            [JsiiProperty(name: "cenId", typeJson: "{\"primitive\":\"string\"}")]
            public string CenId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: cenOwnerId: The UID of the account to which the target CEN instance belongs.
            /// </remarks>
            [JsiiProperty(name: "cenOwnerId", typeJson: "{\"primitive\":\"number\"}")]
            public double CenOwnerId
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the network instance.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceType: The type of the network instance. Valid values:
            /// VPC: Virtual Private Cloud (VPC).
            /// VBR: Virtual Border Router (VBR).
            /// CCN: Cloud Connect Network (CCN).
            /// </remarks>
            [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceType
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
