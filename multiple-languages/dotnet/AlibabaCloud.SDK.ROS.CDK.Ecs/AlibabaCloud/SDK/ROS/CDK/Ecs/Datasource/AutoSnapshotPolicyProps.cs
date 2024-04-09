using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `AutoSnapshotPolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-autosnapshotpolicy
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.datasource.AutoSnapshotPolicyProps")]
    public class AutoSnapshotPolicyProps : AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IAutoSnapshotPolicyProps
    {
        private object _autoSnapshotPolicyId;

        /// <summary>Property autoSnapshotPolicyId: The name of the automatic snapshot policy.</summary>
        [JsiiProperty(name: "autoSnapshotPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AutoSnapshotPolicyId
        {
            get => _autoSnapshotPolicyId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _autoSnapshotPolicyId = value;
            }
        }
    }
}
