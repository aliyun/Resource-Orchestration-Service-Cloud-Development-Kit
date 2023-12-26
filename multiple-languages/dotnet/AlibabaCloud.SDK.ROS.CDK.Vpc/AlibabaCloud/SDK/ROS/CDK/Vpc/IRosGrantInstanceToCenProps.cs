using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosGrantInstanceToCen`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-grantinstancetocen
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosGrantInstanceToCenProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosGrantInstanceToCenProps")]
    public interface IRosGrantInstanceToCenProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cenId: The ID of the CEN instance to be authorized.
        /// </remarks>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: cenOwnerId: The UID of the account to which the target CEN instance belongs.
        /// </remarks>
        [JsiiProperty(name: "cenOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenOwnerId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the network instance.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceType: The type of the network instance. Valid values:
        /// VPC: Virtual Private Cloud (VPC).
        /// VBR: Virtual Border Router (VBR).
        /// CCN: Cloud Connect Network (CCN).
        /// </remarks>
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceType
        {
            get;
        }

        /// <summary>Properties for defining a `RosGrantInstanceToCen`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-grantinstancetocen
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosGrantInstanceToCenProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosGrantInstanceToCenProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosGrantInstanceToCenProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: cenId: The ID of the CEN instance to be authorized.
            /// </remarks>
            [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: cenOwnerId: The UID of the account to which the target CEN instance belongs.
            /// </remarks>
            [JsiiProperty(name: "cenOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenOwnerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the network instance.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceType: The type of the network instance. Valid values:
            /// VPC: Virtual Private Cloud (VPC).
            /// VBR: Virtual Border Router (VBR).
            /// CCN: Cloud Connect Network (CCN).
            /// </remarks>
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceType
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
