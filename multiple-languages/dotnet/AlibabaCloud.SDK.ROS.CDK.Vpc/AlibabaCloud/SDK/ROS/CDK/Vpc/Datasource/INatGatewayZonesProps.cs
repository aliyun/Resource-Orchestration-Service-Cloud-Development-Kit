using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `NatGatewayZones`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgatewayzones
    /// </remarks>
    [JsiiInterface(nativeType: typeof(INatGatewayZonesProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.NatGatewayZonesProps")]
    public interface INatGatewayZonesProps
    {

        /// <summary>Properties for defining a `NatGatewayZones`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgatewayzones
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(INatGatewayZonesProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.NatGatewayZonesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.INatGatewayZonesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }
        }
    }
}
