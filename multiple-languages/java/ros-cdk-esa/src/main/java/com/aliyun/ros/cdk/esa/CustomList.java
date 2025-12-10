package com.aliyun.ros.cdk.esa;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESA::CustomList</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.443Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.CustomList")
public class CustomList extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.esa.ICustomList {

    protected CustomList(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CustomList(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public CustomList(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.CustomListProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public CustomList(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.CustomListProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Description: The description of the custom list.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Items: The items in the custom list, which are displayed as an array.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrItems() {
        return software.amazon.jsii.Kernel.get(this, "attrItems", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Kind: The type of the custom list.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrKind() {
        return software.amazon.jsii.Kernel.get(this, "attrKind", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ListId: The id of the custom list .
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrListId() {
        return software.amazon.jsii.Kernel.get(this, "attrListId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ListName: The name of the custom list.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrListName() {
        return software.amazon.jsii.Kernel.get(this, "attrListName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UpdateTime: The time when the custom list was last modified.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.CustomListProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.CustomListProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.CustomList}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.CustomList> {
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
        private final com.aliyun.ros.cdk.esa.CustomListProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.CustomListProps.Builder();
        }

        /**
         * Property items: The items in the custom list, which are displayed as an array.
         * <p>
         * @return {@code this}
         * @param items Property items: The items in the custom list, which are displayed as an array. This parameter is required.
         */
        public Builder items(final com.aliyun.ros.cdk.core.IResolvable items) {
            this.props.items(items);
            return this;
        }
        /**
         * Property items: The items in the custom list, which are displayed as an array.
         * <p>
         * @return {@code this}
         * @param items Property items: The items in the custom list, which are displayed as an array. This parameter is required.
         */
        public Builder items(final java.util.List<? extends java.lang.Object> items) {
            this.props.items(items);
            return this;
        }

        /**
         * Property kind: The type of the custom list.
         * <p>
         * @return {@code this}
         * @param kind Property kind: The type of the custom list. This parameter is required.
         */
        public Builder kind(final java.lang.String kind) {
            this.props.kind(kind);
            return this;
        }
        /**
         * Property kind: The type of the custom list.
         * <p>
         * @return {@code this}
         * @param kind Property kind: The type of the custom list. This parameter is required.
         */
        public Builder kind(final com.aliyun.ros.cdk.core.IResolvable kind) {
            this.props.kind(kind);
            return this;
        }

        /**
         * Property listName: The name of the custom list.
         * <p>
         * @return {@code this}
         * @param listName Property listName: The name of the custom list. This parameter is required.
         */
        public Builder listName(final java.lang.String listName) {
            this.props.listName(listName);
            return this;
        }
        /**
         * Property listName: The name of the custom list.
         * <p>
         * @return {@code this}
         * @param listName Property listName: The name of the custom list. This parameter is required.
         */
        public Builder listName(final com.aliyun.ros.cdk.core.IResolvable listName) {
            this.props.listName(listName);
            return this;
        }

        /**
         * Property description: The description of the custom list.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the custom list. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the custom list.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the custom list. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.CustomList}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.CustomList build() {
            return new com.aliyun.ros.cdk.esa.CustomList(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
