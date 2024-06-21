using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ice
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `RosSearchLib`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-searchlib
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ice.RosSearchLibProps")]
    public class RosSearchLibProps : AlibabaCloud.SDK.ROS.CDK.Ice.IRosSearchLibProps
    {
        private object _searchLibName;

        /// <remarks>
        /// <strong>Property</strong>: searchLibName: The name of the Search Lib.
        /// </remarks>
        [JsiiProperty(name: "searchLibName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SearchLibName
        {
            get => _searchLibName;
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
                _searchLibName = value;
            }
        }
    }
}
