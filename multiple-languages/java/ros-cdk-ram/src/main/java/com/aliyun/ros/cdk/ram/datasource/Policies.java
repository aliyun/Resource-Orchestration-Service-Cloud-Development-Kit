package com.aliyun.ros.cdk.ram.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::RAM::Policies</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:56:01.577Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.datasource.Policies")
public class Policies extends com.aliyun.ros.cdk.core.Resource {

    protected Policies(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Policies(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::RAM::Policies</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public Policies(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ram.datasource.PoliciesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::RAM::Policies</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public Policies(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ram.datasource.PoliciesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::RAM::Policies</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Policies(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute Policies: The list of policies.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPolicies() {
        return software.amazon.jsii.Kernel.get(this, "attrPolicies", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PolicyNames: The list of policy names.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPolicyNames() {
        return software.amazon.jsii.Kernel.get(this, "attrPolicyNames", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ram.datasource.Policies}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ram.datasource.Policies> {
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
        private com.aliyun.ros.cdk.ram.datasource.PoliciesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property groupName: The specific group to which policies attached.Only one of UserName, GroupName, and RoleName can be specified at most.
         * <p>
         * @return {@code this}
         * @param groupName Property groupName: The specific group to which policies attached.Only one of UserName, GroupName, and RoleName can be specified at most. This parameter is required.
         */
        public Builder groupName(final java.lang.String groupName) {
            this.props().groupName(groupName);
            return this;
        }
        /**
         * Property groupName: The specific group to which policies attached.Only one of UserName, GroupName, and RoleName can be specified at most.
         * <p>
         * @return {@code this}
         * @param groupName Property groupName: The specific group to which policies attached.Only one of UserName, GroupName, and RoleName can be specified at most. This parameter is required.
         */
        public Builder groupName(final com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.props().groupName(groupName);
            return this;
        }

        /**
         * Property policyName: Filter the results by a specific policy name.
         * <p>
         * Supports using * and ?  to fuzzy match.
         * <p>
         * @return {@code this}
         * @param policyName Property policyName: Filter the results by a specific policy name. This parameter is required.
         */
        public Builder policyName(final java.lang.String policyName) {
            this.props().policyName(policyName);
            return this;
        }
        /**
         * Property policyName: Filter the results by a specific policy name.
         * <p>
         * Supports using * and ?  to fuzzy match.
         * <p>
         * @return {@code this}
         * @param policyName Property policyName: Filter the results by a specific policy name. This parameter is required.
         */
        public Builder policyName(final com.aliyun.ros.cdk.core.IResolvable policyName) {
            this.props().policyName(policyName);
            return this;
        }

        /**
         * Property policyType: Filter the results by a specific policy type.
         * <p>
         * @return {@code this}
         * @param policyType Property policyType: Filter the results by a specific policy type. This parameter is required.
         */
        public Builder policyType(final java.lang.String policyType) {
            this.props().policyType(policyType);
            return this;
        }
        /**
         * Property policyType: Filter the results by a specific policy type.
         * <p>
         * @return {@code this}
         * @param policyType Property policyType: Filter the results by a specific policy type. This parameter is required.
         */
        public Builder policyType(final com.aliyun.ros.cdk.core.IResolvable policyType) {
            this.props().policyType(policyType);
            return this;
        }

        /**
         * Property roleName: The specific role to which policies attached.Only one of UserName, GroupName, and RoleName can be specified at most.
         * <p>
         * @return {@code this}
         * @param roleName Property roleName: The specific role to which policies attached.Only one of UserName, GroupName, and RoleName can be specified at most. This parameter is required.
         */
        public Builder roleName(final java.lang.String roleName) {
            this.props().roleName(roleName);
            return this;
        }
        /**
         * Property roleName: The specific role to which policies attached.Only one of UserName, GroupName, and RoleName can be specified at most.
         * <p>
         * @return {@code this}
         * @param roleName Property roleName: The specific role to which policies attached.Only one of UserName, GroupName, and RoleName can be specified at most. This parameter is required.
         */
        public Builder roleName(final com.aliyun.ros.cdk.core.IResolvable roleName) {
            this.props().roleName(roleName);
            return this;
        }

        /**
         * Property userName: The specific user to which policies attached.
         * <p>
         * Only one of UserName, GroupName, and RoleName can be specified at most.
         * <p>
         * @return {@code this}
         * @param userName Property userName: The specific user to which policies attached. This parameter is required.
         */
        public Builder userName(final java.lang.String userName) {
            this.props().userName(userName);
            return this;
        }
        /**
         * Property userName: The specific user to which policies attached.
         * <p>
         * Only one of UserName, GroupName, and RoleName can be specified at most.
         * <p>
         * @return {@code this}
         * @param userName Property userName: The specific user to which policies attached. This parameter is required.
         */
        public Builder userName(final com.aliyun.ros.cdk.core.IResolvable userName) {
            this.props().userName(userName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ram.datasource.Policies}.
         */
        @Override
        public com.aliyun.ros.cdk.ram.datasource.Policies build() {
            return new com.aliyun.ros.cdk.ram.datasource.Policies(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ram.datasource.PoliciesProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ram.datasource.PoliciesProps.Builder();
            }
            return this.props;
        }
    }
}
