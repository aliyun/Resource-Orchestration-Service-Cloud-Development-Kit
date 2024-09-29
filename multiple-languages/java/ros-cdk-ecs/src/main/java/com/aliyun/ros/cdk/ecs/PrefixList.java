package com.aliyun.ros.cdk.ecs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECS::PrefixList</code>, which is used to create a prefix list.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:38.673Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.PrefixList")
public class PrefixList extends com.aliyun.ros.cdk.core.Resource {

    protected PrefixList(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected PrefixList(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public PrefixList(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.PrefixListProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public PrefixList(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.PrefixListProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute PrefixListId: The ID of the prefix list.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrefixListId() {
        return software.amazon.jsii.Kernel.get(this, "attrPrefixListId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.PrefixListProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.PrefixListProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.PrefixListProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.PrefixList}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.PrefixList> {
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
        private final com.aliyun.ros.cdk.ecs.PrefixListProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.PrefixListProps.Builder();
        }

        /**
         * Property addressFamily: The IP address family.
         * <p>
         * Valid values: IPv4 IPv6
         * <p>
         * @return {@code this}
         * @param addressFamily Property addressFamily: The IP address family. This parameter is required.
         */
        public Builder addressFamily(final java.lang.String addressFamily) {
            this.props.addressFamily(addressFamily);
            return this;
        }
        /**
         * Property addressFamily: The IP address family.
         * <p>
         * Valid values: IPv4 IPv6
         * <p>
         * @return {@code this}
         * @param addressFamily Property addressFamily: The IP address family. This parameter is required.
         */
        public Builder addressFamily(final com.aliyun.ros.cdk.core.IResolvable addressFamily) {
            this.props.addressFamily(addressFamily);
            return this;
        }

        /**
         * Property maxEntries: The maximum number of entries that the prefix list can contain.
         * <p>
         * Valid values: 1 to 200.
         * <p>
         * @return {@code this}
         * @param maxEntries Property maxEntries: The maximum number of entries that the prefix list can contain. This parameter is required.
         */
        public Builder maxEntries(final java.lang.Number maxEntries) {
            this.props.maxEntries(maxEntries);
            return this;
        }
        /**
         * Property maxEntries: The maximum number of entries that the prefix list can contain.
         * <p>
         * Valid values: 1 to 200.
         * <p>
         * @return {@code this}
         * @param maxEntries Property maxEntries: The maximum number of entries that the prefix list can contain. This parameter is required.
         */
        public Builder maxEntries(final com.aliyun.ros.cdk.core.IResolvable maxEntries) {
            this.props.maxEntries(maxEntries);
            return this;
        }

        /**
         * Property prefixListName: The name of the prefix.
         * <p>
         * The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http://, https://, com.aliyun, or com.alibabacloud. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
         * <p>
         * @return {@code this}
         * @param prefixListName Property prefixListName: The name of the prefix. This parameter is required.
         */
        public Builder prefixListName(final java.lang.String prefixListName) {
            this.props.prefixListName(prefixListName);
            return this;
        }
        /**
         * Property prefixListName: The name of the prefix.
         * <p>
         * The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http://, https://, com.aliyun, or com.alibabacloud. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
         * <p>
         * @return {@code this}
         * @param prefixListName Property prefixListName: The name of the prefix. This parameter is required.
         */
        public Builder prefixListName(final com.aliyun.ros.cdk.core.IResolvable prefixListName) {
            this.props.prefixListName(prefixListName);
            return this;
        }

        /**
         * Property description: The description of the prefix list.
         * <p>
         * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the prefix list. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the prefix list.
         * <p>
         * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the prefix list. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property entries:.
         * <p>
         * @return {@code this}
         * @param entries Property entries:. This parameter is required.
         */
        public Builder entries(final com.aliyun.ros.cdk.core.IResolvable entries) {
            this.props.entries(entries);
            return this;
        }
        /**
         * Property entries:.
         * <p>
         * @return {@code this}
         * @param entries Property entries:. This parameter is required.
         */
        public Builder entries(final java.util.List<? extends java.lang.Object> entries) {
            this.props.entries(entries);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.PrefixList}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.PrefixList build() {
            return new com.aliyun.ros.cdk.ecs.PrefixList(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
