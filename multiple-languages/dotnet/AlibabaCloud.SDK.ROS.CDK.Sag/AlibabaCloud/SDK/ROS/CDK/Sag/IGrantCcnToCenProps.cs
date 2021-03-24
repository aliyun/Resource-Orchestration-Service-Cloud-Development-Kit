using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    /// <summary>Properties for defining a `ALIYUN::SAG::GrantCcnToCen`.</summary>
    [JsiiInterface(nativeType: typeof(IGrantCcnToCenProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.GrantCcnToCenProps")]
    public interface IGrantCcnToCenProps
    {
        /// <summary>Property ccnInstanceId: The ID of the CCN instance.</summary>
        [JsiiProperty(name: "ccnInstanceId", typeJson: "{\"primitive\":\"string\"}")]
        string CcnInstanceId
        {
            get;
        }

        /// <summary>Property cenInstanceId: The ID of the CEN instance.</summary>
        [JsiiProperty(name: "cenInstanceId", typeJson: "{\"primitive\":\"string\"}")]
        string CenInstanceId
        {
            get;
        }

        /// <summary>Property cenUid: The ID of the account to which the CEN instance belongs.</summary>
        [JsiiProperty(name: "cenUid", typeJson: "{\"primitive\":\"string\"}")]
        string CenUid
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::SAG::GrantCcnToCen`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IGrantCcnToCenProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.GrantCcnToCenProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sag.IGrantCcnToCenProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property ccnInstanceId: The ID of the CCN instance.</summary>
            [JsiiProperty(name: "ccnInstanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string CcnInstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property cenInstanceId: The ID of the CEN instance.</summary>
            [JsiiProperty(name: "cenInstanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string CenInstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property cenUid: The ID of the account to which the CEN instance belongs.</summary>
            [JsiiProperty(name: "cenUid", typeJson: "{\"primitive\":\"string\"}")]
            public string CenUid
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
