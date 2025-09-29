package com.aliyun.ros.cdk.nas;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::NAS::AccessRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:27.090Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.AccessRule")
public class AccessRule extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.nas.IAccessRule {

    protected AccessRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AccessRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public AccessRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.AccessRuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public AccessRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.AccessRuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AccessRuleId: Rule serial number.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrAccessRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.AccessRuleProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.nas.AccessRuleProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.nas.AccessRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.nas.AccessRule> {
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
        private final com.aliyun.ros.cdk.nas.AccessRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.nas.AccessRuleProps.Builder();
        }

        /**
         * Property accessGroupName: Permission group name.
         * <p>
         * @return {@code this}
         * @param accessGroupName Property accessGroupName: Permission group name. This parameter is required.
         */
        public Builder accessGroupName(final java.lang.String accessGroupName) {
            this.props.accessGroupName(accessGroupName);
            return this;
        }
        /**
         * Property accessGroupName: Permission group name.
         * <p>
         * @return {@code this}
         * @param accessGroupName Property accessGroupName: Permission group name. This parameter is required.
         */
        public Builder accessGroupName(final com.aliyun.ros.cdk.core.IResolvable accessGroupName) {
            this.props.accessGroupName(accessGroupName);
            return this;
        }

        /**
         * Property fileSystemType: The type of file system.
         * <p>
         * Values:
         * standard: the general NAS
         * extreme: the extreme NAS
         * <p>
         * @return {@code this}
         * @param fileSystemType Property fileSystemType: The type of file system. This parameter is required.
         */
        public Builder fileSystemType(final java.lang.String fileSystemType) {
            this.props.fileSystemType(fileSystemType);
            return this;
        }
        /**
         * Property fileSystemType: The type of file system.
         * <p>
         * Values:
         * standard: the general NAS
         * extreme: the extreme NAS
         * <p>
         * @return {@code this}
         * @param fileSystemType Property fileSystemType: The type of file system. This parameter is required.
         */
        public Builder fileSystemType(final com.aliyun.ros.cdk.core.IResolvable fileSystemType) {
            this.props.fileSystemType(fileSystemType);
            return this;
        }

        /**
         * Property ipv6SourceCidrIp: Source IPv6 CIDR address segment.
         * <p>
         * IP addresses in CIDR format and IPv6 format are supported.
         * Currently, only the ultra-fast NAS in mainland China supports the IPv6 function, and the file system needs to enable the IPv6 function.
         * Only VPC private network is supported.
         * IPv4 and IPv6 are mutually exclusive, and the types cannot be converted.
         * <p>
         * @return {@code this}
         * @param ipv6SourceCidrIp Property ipv6SourceCidrIp: Source IPv6 CIDR address segment. This parameter is required.
         */
        public Builder ipv6SourceCidrIp(final java.lang.String ipv6SourceCidrIp) {
            this.props.ipv6SourceCidrIp(ipv6SourceCidrIp);
            return this;
        }
        /**
         * Property ipv6SourceCidrIp: Source IPv6 CIDR address segment.
         * <p>
         * IP addresses in CIDR format and IPv6 format are supported.
         * Currently, only the ultra-fast NAS in mainland China supports the IPv6 function, and the file system needs to enable the IPv6 function.
         * Only VPC private network is supported.
         * IPv4 and IPv6 are mutually exclusive, and the types cannot be converted.
         * <p>
         * @return {@code this}
         * @param ipv6SourceCidrIp Property ipv6SourceCidrIp: Source IPv6 CIDR address segment. This parameter is required.
         */
        public Builder ipv6SourceCidrIp(final com.aliyun.ros.cdk.core.IResolvable ipv6SourceCidrIp) {
            this.props.ipv6SourceCidrIp(ipv6SourceCidrIp);
            return this;
        }

        /**
         * Property priority: Priority level.
         * <p>
         * Range: 1-100. Default value: 1
         * <p>
         * @return {@code this}
         * @param priority Property priority: Priority level. This parameter is required.
         */
        public Builder priority(final java.lang.Number priority) {
            this.props.priority(priority);
            return this;
        }
        /**
         * Property priority: Priority level.
         * <p>
         * Range: 1-100. Default value: 1
         * <p>
         * @return {@code this}
         * @param priority Property priority: Priority level. This parameter is required.
         */
        public Builder priority(final com.aliyun.ros.cdk.core.IResolvable priority) {
            this.props.priority(priority);
            return this;
        }

        /**
         * Property rwAccessType: Read-write permission type: RDWR (default), RDONLY.
         * <p>
         * @return {@code this}
         * @param rwAccessType Property rwAccessType: Read-write permission type: RDWR (default), RDONLY. This parameter is required.
         */
        public Builder rwAccessType(final java.lang.String rwAccessType) {
            this.props.rwAccessType(rwAccessType);
            return this;
        }
        /**
         * Property rwAccessType: Read-write permission type: RDWR (default), RDONLY.
         * <p>
         * @return {@code this}
         * @param rwAccessType Property rwAccessType: Read-write permission type: RDWR (default), RDONLY. This parameter is required.
         */
        public Builder rwAccessType(final com.aliyun.ros.cdk.core.IResolvable rwAccessType) {
            this.props.rwAccessType(rwAccessType);
            return this;
        }

        /**
         * Property sourceCidrIp: Address or address segment.
         * <p>
         * @return {@code this}
         * @param sourceCidrIp Property sourceCidrIp: Address or address segment. This parameter is required.
         */
        public Builder sourceCidrIp(final java.lang.String sourceCidrIp) {
            this.props.sourceCidrIp(sourceCidrIp);
            return this;
        }
        /**
         * Property sourceCidrIp: Address or address segment.
         * <p>
         * @return {@code this}
         * @param sourceCidrIp Property sourceCidrIp: Address or address segment. This parameter is required.
         */
        public Builder sourceCidrIp(final com.aliyun.ros.cdk.core.IResolvable sourceCidrIp) {
            this.props.sourceCidrIp(sourceCidrIp);
            return this;
        }

        /**
         * Property userAccessType: User permission type: no_squash (default), root_squash, all_squash.
         * <p>
         * @return {@code this}
         * @param userAccessType Property userAccessType: User permission type: no_squash (default), root_squash, all_squash. This parameter is required.
         */
        public Builder userAccessType(final java.lang.String userAccessType) {
            this.props.userAccessType(userAccessType);
            return this;
        }
        /**
         * Property userAccessType: User permission type: no_squash (default), root_squash, all_squash.
         * <p>
         * @return {@code this}
         * @param userAccessType Property userAccessType: User permission type: no_squash (default), root_squash, all_squash. This parameter is required.
         */
        public Builder userAccessType(final com.aliyun.ros.cdk.core.IResolvable userAccessType) {
            this.props.userAccessType(userAccessType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.nas.AccessRule}.
         */
        @Override
        public com.aliyun.ros.cdk.nas.AccessRule build() {
            return new com.aliyun.ros.cdk.nas.AccessRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
