using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::GrantInstanceToCen`.</summary>
    [JsiiInterface(nativeType: typeof(IGrantInstanceToCenProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.GrantInstanceToCenProps")]
    public interface IGrantInstanceToCenProps
    {
        /// <summary>Property cenId: The ID of the CEN instance to be authorized.</summary>
        [JsiiProperty(name: "cenId", typeJson: "{\"primitive\":\"string\"}")]
        string CenId
        {
            get;
        }

        /// <summary>Property cenOwnerId: The UID of the account to which the target CEN instance belongs.</summary>
        [JsiiProperty(name: "cenOwnerId", typeJson: "{\"primitive\":\"number\"}")]
        double CenOwnerId
        {
            get;
        }

        /// <summary>Property instanceId: The ID of the network instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceId
        {
            get;
        }

        /// <summary>Property instanceType: The type of the network instance.</summary>
        /// <remarks>
        /// Valid values:
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
        [JsiiTypeProxy(nativeType: typeof(IGrantInstanceToCenProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.GrantInstanceToCenProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IGrantInstanceToCenProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cenId: The ID of the CEN instance to be authorized.</summary>
            [JsiiProperty(name: "cenId", typeJson: "{\"primitive\":\"string\"}")]
            public string CenId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property cenOwnerId: The UID of the account to which the target CEN instance belongs.</summary>
            [JsiiProperty(name: "cenOwnerId", typeJson: "{\"primitive\":\"number\"}")]
            public double CenOwnerId
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property instanceId: The ID of the network instance.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property instanceType: The type of the network instance.</summary>
            /// <remarks>
            /// Valid values:
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
