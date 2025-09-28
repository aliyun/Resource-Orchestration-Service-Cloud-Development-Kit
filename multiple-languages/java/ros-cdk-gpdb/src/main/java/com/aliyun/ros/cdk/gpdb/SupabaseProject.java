package com.aliyun.ros.cdk.gpdb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::GPDB::SupabaseProject</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:26.264Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gpdb.$Module.class, fqn = "@alicloud/ros-cdk-gpdb.SupabaseProject")
public class SupabaseProject extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.gpdb.ISupabaseProject {

    protected SupabaseProject(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SupabaseProject(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public SupabaseProject(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.SupabaseProjectProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public SupabaseProject(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.SupabaseProjectProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ProjectId: Supabase instance ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProjectId() {
        return software.amazon.jsii.Kernel.get(this, "attrProjectId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.SupabaseProjectProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.gpdb.SupabaseProjectProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.gpdb.SupabaseProject}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.gpdb.SupabaseProject> {
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
        private final com.aliyun.ros.cdk.gpdb.SupabaseProjectProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.gpdb.SupabaseProjectProps.Builder();
        }

        /**
         * Property accountPassword: The password for the initial account.
         * <p>
         * It consists of three or more types of capital letters, lowercase letters, numbers, and special characters.
         * Supported special characters: !&#64;#$%^&amp;*()_+-=
         * The length is 8~32 characters.
         * <p>
         * @return {@code this}
         * @param accountPassword Property accountPassword: The password for the initial account. This parameter is required.
         */
        public Builder accountPassword(final java.lang.String accountPassword) {
            this.props.accountPassword(accountPassword);
            return this;
        }
        /**
         * Property accountPassword: The password for the initial account.
         * <p>
         * It consists of three or more types of capital letters, lowercase letters, numbers, and special characters.
         * Supported special characters: !&#64;#$%^&amp;*()_+-=
         * The length is 8~32 characters.
         * <p>
         * @return {@code this}
         * @param accountPassword Property accountPassword: The password for the initial account. This parameter is required.
         */
        public Builder accountPassword(final com.aliyun.ros.cdk.core.IResolvable accountPassword) {
            this.props.accountPassword(accountPassword);
            return this;
        }

        /**
         * Property projectName: Project name.The naming rules are as follows: The length is 1~128 characters. Only English letters, numbers, dash (-) and underscore (<em>). Must start with English letters or underscores (</em>).
         * <p>
         * @return {@code this}
         * @param projectName Property projectName: Project name.The naming rules are as follows: The length is 1~128 characters. Only English letters, numbers, dash (-) and underscore (<em>). Must start with English letters or underscores (</em>). This parameter is required.
         */
        public Builder projectName(final java.lang.String projectName) {
            this.props.projectName(projectName);
            return this;
        }
        /**
         * Property projectName: Project name.The naming rules are as follows: The length is 1~128 characters. Only English letters, numbers, dash (-) and underscore (<em>). Must start with English letters or underscores (</em>).
         * <p>
         * @return {@code this}
         * @param projectName Property projectName: Project name.The naming rules are as follows: The length is 1~128 characters. Only English letters, numbers, dash (-) and underscore (<em>). Must start with English letters or underscores (</em>). This parameter is required.
         */
        public Builder projectName(final com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.props.projectName(projectName);
            return this;
        }

        /**
         * Property projectSpec: Supabase instance specification, default is 1C1G.
         * <p>
         * @return {@code this}
         * @param projectSpec Property projectSpec: Supabase instance specification, default is 1C1G. This parameter is required.
         */
        public Builder projectSpec(final java.lang.String projectSpec) {
            this.props.projectSpec(projectSpec);
            return this;
        }
        /**
         * Property projectSpec: Supabase instance specification, default is 1C1G.
         * <p>
         * @return {@code this}
         * @param projectSpec Property projectSpec: Supabase instance specification, default is 1C1G. This parameter is required.
         */
        public Builder projectSpec(final com.aliyun.ros.cdk.core.IResolvable projectSpec) {
            this.props.projectSpec(projectSpec);
            return this;
        }

        /**
         * Property securityIpList: IP whitelist.
         * <p>
         * 127.0.0.1 means that any external IP access is prohibited. You can call the ModifySecurityIps interface to modify the IP whitelist after the instance is created.
         * <p>
         * @return {@code this}
         * @param securityIpList Property securityIpList: IP whitelist. This parameter is required.
         */
        public Builder securityIpList(final java.lang.String securityIpList) {
            this.props.securityIpList(securityIpList);
            return this;
        }
        /**
         * Property securityIpList: IP whitelist.
         * <p>
         * 127.0.0.1 means that any external IP access is prohibited. You can call the ModifySecurityIps interface to modify the IP whitelist after the instance is created.
         * <p>
         * @return {@code this}
         * @param securityIpList Property securityIpList: IP whitelist. This parameter is required.
         */
        public Builder securityIpList(final com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.props.securityIpList(securityIpList);
            return this;
        }

        /**
         * Property vpcId: VPC ID.
         * <p>
         * illustrate
         * You can call the DescribeRdsVpcs interface to view the available VPC IDs.
         * This parameter must be passed in.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: VPC ID. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: VPC ID.
         * <p>
         * illustrate
         * You can call the DescribeRdsVpcs interface to view the available VPC IDs.
         * This parameter must be passed in.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: VPC ID. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: vSwitch ID.
         * <p>
         * illustrate
         * vSwitchId is required.
         * The Availability Zone where the vSwitch is located must be consistent with the ZoneId.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: vSwitch ID. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: vSwitch ID.
         * <p>
         * illustrate
         * vSwitchId is required.
         * The Availability Zone where the vSwitch is located must be consistent with the ZoneId.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: vSwitch ID. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property zoneId: Availability Zone ID.
         * <p>
         * Description You can call the DescribeRegions interface to view the available Availability Zone ID.
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
         * Description You can call the DescribeRegions interface to view the available Availability Zone ID.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: Availability Zone ID. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * Property diskPerformanceLevel: Cloud disk PL level, default PL0.
         * <p>
         * Selectable value:
         * PL0
         * PL1
         * <p>
         * @return {@code this}
         * @param diskPerformanceLevel Property diskPerformanceLevel: Cloud disk PL level, default PL0. This parameter is required.
         */
        public Builder diskPerformanceLevel(final java.lang.String diskPerformanceLevel) {
            this.props.diskPerformanceLevel(diskPerformanceLevel);
            return this;
        }
        /**
         * Property diskPerformanceLevel: Cloud disk PL level, default PL0.
         * <p>
         * Selectable value:
         * PL0
         * PL1
         * <p>
         * @return {@code this}
         * @param diskPerformanceLevel Property diskPerformanceLevel: Cloud disk PL level, default PL0. This parameter is required.
         */
        public Builder diskPerformanceLevel(final com.aliyun.ros.cdk.core.IResolvable diskPerformanceLevel) {
            this.props.diskPerformanceLevel(diskPerformanceLevel);
            return this;
        }

        /**
         * Property storageSize: Storage space size, unit GB, default 1GB.
         * <p>
         * @return {@code this}
         * @param storageSize Property storageSize: Storage space size, unit GB, default 1GB. This parameter is required.
         */
        public Builder storageSize(final java.lang.Number storageSize) {
            this.props.storageSize(storageSize);
            return this;
        }
        /**
         * Property storageSize: Storage space size, unit GB, default 1GB.
         * <p>
         * @return {@code this}
         * @param storageSize Property storageSize: Storage space size, unit GB, default 1GB. This parameter is required.
         */
        public Builder storageSize(final com.aliyun.ros.cdk.core.IResolvable storageSize) {
            this.props.storageSize(storageSize);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.gpdb.SupabaseProject}.
         */
        @Override
        public com.aliyun.ros.cdk.gpdb.SupabaseProject build() {
            return new com.aliyun.ros.cdk.gpdb.SupabaseProject(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
