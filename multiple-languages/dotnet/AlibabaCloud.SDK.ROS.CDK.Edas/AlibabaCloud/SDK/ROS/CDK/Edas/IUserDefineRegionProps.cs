using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    /// <summary>Properties for defining a `ALIYUN::EDAS::UserDefineRegion`.</summary>
    [JsiiInterface(nativeType: typeof(IUserDefineRegionProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.UserDefineRegionProps")]
    public interface IUserDefineRegionProps
    {
        /// <summary>Property regionName: Logical region (or namespace) name.</summary>
        [JsiiProperty(name: "regionName", typeJson: "{\"primitive\":\"string\"}")]
        string RegionName
        {
            get;
        }

        /// <summary>Property regionTag: Logic region (or namespace) ID (format: "physical region ID: logical zone identifier", or "logical zone identifier").</summary>
        [JsiiProperty(name: "regionTag", typeJson: "{\"primitive\":\"string\"}")]
        string RegionTag
        {
            get;
        }

        /// <summary>Property debugEnable: Whether debug is enable.</summary>
        [JsiiProperty(name: "debugEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DebugEnable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: Logic region (or namespace) description.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::EDAS::UserDefineRegion`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IUserDefineRegionProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.UserDefineRegionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.IUserDefineRegionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property regionName: Logical region (or namespace) name.</summary>
            [JsiiProperty(name: "regionName", typeJson: "{\"primitive\":\"string\"}")]
            public string RegionName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property regionTag: Logic region (or namespace) ID (format: "physical region ID: logical zone identifier", or "logical zone identifier").</summary>
            [JsiiProperty(name: "regionTag", typeJson: "{\"primitive\":\"string\"}")]
            public string RegionTag
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property debugEnable: Whether debug is enable.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "debugEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DebugEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: Logic region (or namespace) description.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
