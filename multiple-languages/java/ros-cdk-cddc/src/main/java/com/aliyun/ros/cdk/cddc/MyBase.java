package com.aliyun.ros.cdk.cddc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CDDC::MyBase</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T07:26:11.447Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cddc.$Module.class, fqn = "@alicloud/ros-cdk-cddc.MyBase")
public class MyBase extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cddc.IMyBase {

    protected MyBase(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected MyBase(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public MyBase(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cddc.MyBaseProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public MyBase(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cddc.MyBaseProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute InstanceIds: The instance id list of created ecs instances.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceIds() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OrderIds: The order id list.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderIds() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cddc.MyBaseProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cddc.MyBaseProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cddc.MyBase}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cddc.MyBase> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.cddc.MyBaseProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cddc.MyBaseProps.Builder();
        }

        /**
         * Property ecsClassList: ECS Class List.
         * <p>
         * @return {@code this}
         * @param ecsClassList Property ecsClassList: ECS Class List. This parameter is required.
         */
        public Builder ecsClassList(final com.aliyun.ros.cdk.core.IResolvable ecsClassList) {
            this.props.ecsClassList(ecsClassList);
            return this;
        }
        /**
         * Property ecsClassList: ECS Class List.
         * <p>
         * @return {@code this}
         * @param ecsClassList Property ecsClassList: ECS Class List. This parameter is required.
         */
        public Builder ecsClassList(final java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> ecsClassList) {
            this.props.ecsClassList(ecsClassList);
            return this;
        }

        /**
         * Property engine: The database type.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>mysql</li>
         * <li>tair</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param engine Property engine: The database type. This parameter is required.
         */
        public Builder engine(final java.lang.String engine) {
            this.props.engine(engine);
            return this;
        }
        /**
         * Property engine: The database type.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>mysql</li>
         * <li>tair</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param engine Property engine: The database type. This parameter is required.
         */
        public Builder engine(final com.aliyun.ros.cdk.core.IResolvable engine) {
            this.props.engine(engine);
            return this;
        }

        /**
         * Property payType: Payment type, currently only supports PrePaid.
         * <p>
         * @return {@code this}
         * @param payType Property payType: Payment type, currently only supports PrePaid. This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props.payType(payType);
            return this;
        }
        /**
         * Property payType: Payment type, currently only supports PrePaid.
         * <p>
         * @return {@code this}
         * @param payType Property payType: Payment type, currently only supports PrePaid. This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props.payType(payType);
            return this;
        }

        /**
         * Property period: The period of the subscription in months.
         * <p>
         * @return {@code this}
         * @param period Property period: The period of the subscription in months. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The period of the subscription in months.
         * <p>
         * @return {@code this}
         * @param period Property period: The period of the subscription in months. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property securityGroupId: The security group ID.
         * <p>
         * Specify multiple security groups, separated by commas (,).
         * Format: sg-t4neld965n89ocvt,sg-t4neld965n89ocvu
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: The security group ID. This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * Property securityGroupId: The security group ID.
         * <p>
         * Specify multiple security groups, separated by commas (,).
         * Format: sg-t4neld965n89ocvt,sg-t4neld965n89ocvu
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: The security group ID. This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * Property vpcId: The ID of the VPC.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the VPC.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: Virtual switch ID.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: Virtual switch ID. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: Virtual switch ID.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: Virtual switch ID. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property zoneId: Availability Zone ID.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: Availability Zone ID. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: Availability Zone ID.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: Availability Zone ID. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * Property autoRenew: Whether to enable auto renew.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether to enable auto renew. This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: Whether to enable auto renew.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether to enable auto renew. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * Property dedicatedHostGroupDescription: The name of the dedicated cluster.
         * <p>
         * @return {@code this}
         * @param dedicatedHostGroupDescription Property dedicatedHostGroupDescription: The name of the dedicated cluster. This parameter is required.
         */
        public Builder dedicatedHostGroupDescription(final java.lang.String dedicatedHostGroupDescription) {
            this.props.dedicatedHostGroupDescription(dedicatedHostGroupDescription);
            return this;
        }
        /**
         * Property dedicatedHostGroupDescription: The name of the dedicated cluster.
         * <p>
         * @return {@code this}
         * @param dedicatedHostGroupDescription Property dedicatedHostGroupDescription: The name of the dedicated cluster. This parameter is required.
         */
        public Builder dedicatedHostGroupDescription(final com.aliyun.ros.cdk.core.IResolvable dedicatedHostGroupDescription) {
            this.props.dedicatedHostGroupDescription(dedicatedHostGroupDescription);
            return this;
        }

        /**
         * Property dedicatedHostGroupId: The ID of the dedicated cluster.
         * <p>
         * @return {@code this}
         * @param dedicatedHostGroupId Property dedicatedHostGroupId: The ID of the dedicated cluster. This parameter is required.
         */
        public Builder dedicatedHostGroupId(final java.lang.String dedicatedHostGroupId) {
            this.props.dedicatedHostGroupId(dedicatedHostGroupId);
            return this;
        }
        /**
         * Property dedicatedHostGroupId: The ID of the dedicated cluster.
         * <p>
         * @return {@code this}
         * @param dedicatedHostGroupId Property dedicatedHostGroupId: The ID of the dedicated cluster. This parameter is required.
         */
        public Builder dedicatedHostGroupId(final com.aliyun.ros.cdk.core.IResolvable dedicatedHostGroupId) {
            this.props.dedicatedHostGroupId(dedicatedHostGroupId);
            return this;
        }

        /**
         * Property ecsDeploymentSetId: The ID of the deployment set.
         * <p>
         * @return {@code this}
         * @param ecsDeploymentSetId Property ecsDeploymentSetId: The ID of the deployment set. This parameter is required.
         */
        public Builder ecsDeploymentSetId(final java.lang.String ecsDeploymentSetId) {
            this.props.ecsDeploymentSetId(ecsDeploymentSetId);
            return this;
        }
        /**
         * Property ecsDeploymentSetId: The ID of the deployment set.
         * <p>
         * @return {@code this}
         * @param ecsDeploymentSetId Property ecsDeploymentSetId: The ID of the deployment set. This parameter is required.
         */
        public Builder ecsDeploymentSetId(final com.aliyun.ros.cdk.core.IResolvable ecsDeploymentSetId) {
            this.props.ecsDeploymentSetId(ecsDeploymentSetId);
            return this;
        }

        /**
         * Property ecsHostName: For Windows operating systems: The host name must be 2 to 15 characters in length and can contain uppercase letters, lowercase letters, and digits.
         * <p>
         * It cannot
         * consist of only digits.
         * For other operating systems (such as Linux): The host name must be 2 to 64
         * characters in length and can contain periods (.) to separate multiple segments.
         * Each segment can contain uppercase letters, lowercase letters, and digits.
         * Consecutive periods (.) are not allowed. The host name cannot start or end with a
         * period (.).
         * <p>
         * @return {@code this}
         * @param ecsHostName Property ecsHostName: For Windows operating systems: The host name must be 2 to 15 characters in length and can contain uppercase letters, lowercase letters, and digits. This parameter is required.
         */
        public Builder ecsHostName(final java.lang.String ecsHostName) {
            this.props.ecsHostName(ecsHostName);
            return this;
        }
        /**
         * Property ecsHostName: For Windows operating systems: The host name must be 2 to 15 characters in length and can contain uppercase letters, lowercase letters, and digits.
         * <p>
         * It cannot
         * consist of only digits.
         * For other operating systems (such as Linux): The host name must be 2 to 64
         * characters in length and can contain periods (.) to separate multiple segments.
         * Each segment can contain uppercase letters, lowercase letters, and digits.
         * Consecutive periods (.) are not allowed. The host name cannot start or end with a
         * period (.).
         * <p>
         * @return {@code this}
         * @param ecsHostName Property ecsHostName: For Windows operating systems: The host name must be 2 to 15 characters in length and can contain uppercase letters, lowercase letters, and digits. This parameter is required.
         */
        public Builder ecsHostName(final com.aliyun.ros.cdk.core.IResolvable ecsHostName) {
            this.props.ecsHostName(ecsHostName);
            return this;
        }

        /**
         * Property ecsInstanceName: The instance name.
         * <p>
         * It must be 2 to 128 characters in length. It must start with
         * an uppercase letter, a lowercase letter, or a Chinese character. It cannot start
         * with http:// or https://. It can contain Chinese characters, English letters,
         * digits, colons (:), underscores (_), periods (.), or hyphens (-). The default
         * value is the instance ID.
         * <p>
         * @return {@code this}
         * @param ecsInstanceName Property ecsInstanceName: The instance name. This parameter is required.
         */
        public Builder ecsInstanceName(final java.lang.String ecsInstanceName) {
            this.props.ecsInstanceName(ecsInstanceName);
            return this;
        }
        /**
         * Property ecsInstanceName: The instance name.
         * <p>
         * It must be 2 to 128 characters in length. It must start with
         * an uppercase letter, a lowercase letter, or a Chinese character. It cannot start
         * with http:// or https://. It can contain Chinese characters, English letters,
         * digits, colons (:), underscores (_), periods (.), or hyphens (-). The default
         * value is the instance ID.
         * <p>
         * @return {@code this}
         * @param ecsInstanceName Property ecsInstanceName: The instance name. This parameter is required.
         */
        public Builder ecsInstanceName(final com.aliyun.ros.cdk.core.IResolvable ecsInstanceName) {
            this.props.ecsInstanceName(ecsInstanceName);
            return this;
        }

        /**
         * Property ecsUniqueSuffix: Automatically add a sequential suffix to the HostName and InstanceName when you create multiple instances.
         * <p>
         * The sequential suffix starts from 001 and increments
         * up to 999. Valid values:
         * <p>
         * <ul>
         * <li>true: Add.</li>
         * <li>false (default): Do not add.
         * If HostName or InstanceName is set in a specific sorting format, and the
         * name_suffix is not set (i.e., the naming format is
         * name_prefix[begin_number,bits]), UniqueSuffix does not take effect. The names
         * are sorted only in the specified order.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param ecsUniqueSuffix Property ecsUniqueSuffix: Automatically add a sequential suffix to the HostName and InstanceName when you create multiple instances. This parameter is required.
         */
        public Builder ecsUniqueSuffix(final java.lang.Boolean ecsUniqueSuffix) {
            this.props.ecsUniqueSuffix(ecsUniqueSuffix);
            return this;
        }
        /**
         * Property ecsUniqueSuffix: Automatically add a sequential suffix to the HostName and InstanceName when you create multiple instances.
         * <p>
         * The sequential suffix starts from 001 and increments
         * up to 999. Valid values:
         * <p>
         * <ul>
         * <li>true: Add.</li>
         * <li>false (default): Do not add.
         * If HostName or InstanceName is set in a specific sorting format, and the
         * name_suffix is not set (i.e., the naming format is
         * name_prefix[begin_number,bits]), UniqueSuffix does not take effect. The names
         * are sorted only in the specified order.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param ecsUniqueSuffix Property ecsUniqueSuffix: Automatically add a sequential suffix to the HostName and InstanceName when you create multiple instances. This parameter is required.
         */
        public Builder ecsUniqueSuffix(final com.aliyun.ros.cdk.core.IResolvable ecsUniqueSuffix) {
            this.props.ecsUniqueSuffix(ecsUniqueSuffix);
            return this;
        }

        /**
         * Property imageId: The custom image ID.
         * <p>
         * <blockquote>
         * <p>
         * If you want to use the default image, do not specify this parameter.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: The custom image ID. This parameter is required.
         */
        public Builder imageId(final java.lang.String imageId) {
            this.props.imageId(imageId);
            return this;
        }
        /**
         * Property imageId: The custom image ID.
         * <p>
         * <blockquote>
         * <p>
         * If you want to use the default image, do not specify this parameter.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: The custom image ID. This parameter is required.
         */
        public Builder imageId(final com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.props.imageId(imageId);
            return this;
        }

        /**
         * Property internetChargeType: The network billing method.
         * <p>
         * Valid values include the following:
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: The network billing method. This parameter is required.
         */
        public Builder internetChargeType(final java.lang.String internetChargeType) {
            this.props.internetChargeType(internetChargeType);
            return this;
        }
        /**
         * Property internetChargeType: The network billing method.
         * <p>
         * Valid values include the following:
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: The network billing method. This parameter is required.
         */
        public Builder internetChargeType(final com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.props.internetChargeType(internetChargeType);
            return this;
        }

        /**
         * Property internetMaxBandwidthOut: The maximum outbound public bandwidth, in Mbit/s.
         * <p>
         * Valid values: 0 to 100.
         * Default value: 0. If you set this parameter to a value greater than 0, a public
         * IP address is automatically created.
         * <p>
         * @return {@code this}
         * @param internetMaxBandwidthOut Property internetMaxBandwidthOut: The maximum outbound public bandwidth, in Mbit/s. This parameter is required.
         */
        public Builder internetMaxBandwidthOut(final java.lang.Number internetMaxBandwidthOut) {
            this.props.internetMaxBandwidthOut(internetMaxBandwidthOut);
            return this;
        }
        /**
         * Property internetMaxBandwidthOut: The maximum outbound public bandwidth, in Mbit/s.
         * <p>
         * Valid values: 0 to 100.
         * Default value: 0. If you set this parameter to a value greater than 0, a public
         * IP address is automatically created.
         * <p>
         * @return {@code this}
         * @param internetMaxBandwidthOut Property internetMaxBandwidthOut: The maximum outbound public bandwidth, in Mbit/s. This parameter is required.
         */
        public Builder internetMaxBandwidthOut(final com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthOut) {
            this.props.internetMaxBandwidthOut(internetMaxBandwidthOut);
            return this;
        }

        /**
         * Property keyPairName: The name of the key pair.
         * <p>
         * @return {@code this}
         * @param keyPairName Property keyPairName: The name of the key pair. This parameter is required.
         */
        public Builder keyPairName(final java.lang.String keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }
        /**
         * Property keyPairName: The name of the key pair.
         * <p>
         * @return {@code this}
         * @param keyPairName Property keyPairName: The name of the key pair. This parameter is required.
         */
        public Builder keyPairName(final com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }

        /**
         * Property osPassword: The logon password for the host.
         * <p>
         * You can set it later. The password must meet the
         * following requirements:
         * <p>
         * <ul>
         * <li>It must be 8 to 30 characters in length.</li>
         * <li>It must contain at least three of the following character types: uppercase
         * letters, lowercase letters, digits, and special characters.</li>
         * <li>Special characters: <code>()\</code>~!&#64;#$%^&amp;*-_+=|{}[]:;'&lt;&gt;,.?/`</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * <ul>
         * <li>If you want to set the logon password later, leave this parameter empty.</li>
         * <li>If you want to set the logon password, use HTTPS to send requests to prevent
         * password leakage.</li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param osPassword Property osPassword: The logon password for the host. This parameter is required.
         */
        public Builder osPassword(final java.lang.String osPassword) {
            this.props.osPassword(osPassword);
            return this;
        }
        /**
         * Property osPassword: The logon password for the host.
         * <p>
         * You can set it later. The password must meet the
         * following requirements:
         * <p>
         * <ul>
         * <li>It must be 8 to 30 characters in length.</li>
         * <li>It must contain at least three of the following character types: uppercase
         * letters, lowercase letters, digits, and special characters.</li>
         * <li>Special characters: <code>()\</code>~!&#64;#$%^&amp;*-_+=|{}[]:;'&lt;&gt;,.?/`</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * <ul>
         * <li>If you want to set the logon password later, leave this parameter empty.</li>
         * <li>If you want to set the logon password, use HTTPS to send requests to prevent
         * password leakage.</li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param osPassword Property osPassword: The logon password for the host. This parameter is required.
         */
        public Builder osPassword(final com.aliyun.ros.cdk.core.IResolvable osPassword) {
            this.props.osPassword(osPassword);
            return this;
        }

        /**
         * Property passwordInherit: Use the default password of the image.
         * <p>
         * <ul>
         * <li>false (default): Do not use.</li>
         * <li>true: Use.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * If you use the default password of the image, do not specify the OSPassword
         * parameter.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param passwordInherit Property passwordInherit: Use the default password of the image. This parameter is required.
         */
        public Builder passwordInherit(final java.lang.Boolean passwordInherit) {
            this.props.passwordInherit(passwordInherit);
            return this;
        }
        /**
         * Property passwordInherit: Use the default password of the image.
         * <p>
         * <ul>
         * <li>false (default): Do not use.</li>
         * <li>true: Use.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * If you use the default password of the image, do not specify the OSPassword
         * parameter.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param passwordInherit Property passwordInherit: Use the default password of the image. This parameter is required.
         */
        public Builder passwordInherit(final com.aliyun.ros.cdk.core.IResolvable passwordInherit) {
            this.props.passwordInherit(passwordInherit);
            return this;
        }

        /**
         * Property periodType: Prepaid type, currently only supports Monthly (monthly subscription).
         * <p>
         * @return {@code this}
         * @param periodType Property periodType: Prepaid type, currently only supports Monthly (monthly subscription). This parameter is required.
         */
        public Builder periodType(final java.lang.String periodType) {
            this.props.periodType(periodType);
            return this;
        }
        /**
         * Property periodType: Prepaid type, currently only supports Monthly (monthly subscription).
         * <p>
         * @return {@code this}
         * @param periodType Property periodType: Prepaid type, currently only supports Monthly (monthly subscription). This parameter is required.
         */
        public Builder periodType(final com.aliyun.ros.cdk.core.IResolvable periodType) {
            this.props.periodType(periodType);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property userData: User-defined script data, the original data is up to 16KB.
         * <p>
         * @return {@code this}
         * @param userData Property userData: User-defined script data, the original data is up to 16KB. This parameter is required.
         */
        public Builder userData(final java.lang.String userData) {
            this.props.userData(userData);
            return this;
        }
        /**
         * Property userData: User-defined script data, the original data is up to 16KB.
         * <p>
         * @return {@code this}
         * @param userData Property userData: User-defined script data, the original data is up to 16KB. This parameter is required.
         */
        public Builder userData(final com.aliyun.ros.cdk.core.IResolvable userData) {
            this.props.userData(userData);
            return this;
        }

        /**
         * Property userDataInBase64: Indicates whether the custom data is Base64-encoded.
         * <p>
         * @return {@code this}
         * @param userDataInBase64 Property userDataInBase64: Indicates whether the custom data is Base64-encoded. This parameter is required.
         */
        public Builder userDataInBase64(final java.lang.Boolean userDataInBase64) {
            this.props.userDataInBase64(userDataInBase64);
            return this;
        }
        /**
         * Property userDataInBase64: Indicates whether the custom data is Base64-encoded.
         * <p>
         * @return {@code this}
         * @param userDataInBase64 Property userDataInBase64: Indicates whether the custom data is Base64-encoded. This parameter is required.
         */
        public Builder userDataInBase64(final com.aliyun.ros.cdk.core.IResolvable userDataInBase64) {
            this.props.userDataInBase64(userDataInBase64);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cddc.MyBase}.
         */
        @Override
        public com.aliyun.ros.cdk.cddc.MyBase build() {
            return new com.aliyun.ros.cdk.cddc.MyBase(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
