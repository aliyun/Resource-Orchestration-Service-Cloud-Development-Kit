using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `RosNatGatewayZones`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgatewayzones
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosNatGatewayZonesProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosNatGatewayZonesProps")]
    public interface IRosNatGatewayZonesProps
    {

        /// <summary>Properties for defining a `RosNatGatewayZones`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgatewayzones
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosNatGatewayZonesProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosNatGatewayZonesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IRosNatGatewayZonesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }
        }
    }
}
