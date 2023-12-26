package com.aliyun.ros.cdk.cloudfw.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::CLOUDFW::AddressBooks</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:14.306Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.datasource.AddressBooks")
public class AddressBooks extends com.aliyun.ros.cdk.core.Resource {

    protected AddressBooks(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AddressBooks(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public AddressBooks(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cloudfw.datasource.AddressBooksProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public AddressBooks(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cloudfw.datasource.AddressBooksProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public AddressBooks(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute AddressBooks: The list of address books.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAddressBooks() {
        return software.amazon.jsii.Kernel.get(this, "attrAddressBooks", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute GroupUuids: The list of group uuids.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGroupUuids() {
        return software.amazon.jsii.Kernel.get(this, "attrGroupUuids", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudfw.datasource.AddressBooks}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudfw.datasource.AddressBooks> {
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
        private com.aliyun.ros.cdk.cloudfw.datasource.AddressBooksProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property groupType: Address Book, it can be set to include: - <strong>ip</strong>: an IP address book - <strong>domain</strong>: domain name address book - <strong>port</strong>: port Address Book - <strong>tag</strong>:ECS tag address book.
         * <p>
         * @return {@code this}
         * @param groupType Property groupType: Address Book, it can be set to include: - <strong>ip</strong>: an IP address book - <strong>domain</strong>: domain name address book - <strong>port</strong>: port Address Book - <strong>tag</strong>:ECS tag address book. This parameter is required.
         */
        public Builder groupType(final java.lang.String groupType) {
            this.props().groupType(groupType);
            return this;
        }
        /**
         * Property groupType: Address Book, it can be set to include: - <strong>ip</strong>: an IP address book - <strong>domain</strong>: domain name address book - <strong>port</strong>: port Address Book - <strong>tag</strong>:ECS tag address book.
         * <p>
         * @return {@code this}
         * @param groupType Property groupType: Address Book, it can be set to include: - <strong>ip</strong>: an IP address book - <strong>domain</strong>: domain name address book - <strong>port</strong>: port Address Book - <strong>tag</strong>:ECS tag address book. This parameter is required.
         */
        public Builder groupType(final com.aliyun.ros.cdk.core.IResolvable groupType) {
            this.props().groupType(groupType);
            return this;
        }

        /**
         * Property lang: The language type of the received message.
         * <p>
         * <ul>
         * <li><strong>zh</strong> (default): Chinese.</li>
         * <li><strong>en</strong>: English.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param lang Property lang: The language type of the received message. This parameter is required.
         */
        public Builder lang(final java.lang.String lang) {
            this.props().lang(lang);
            return this;
        }
        /**
         * Property lang: The language type of the received message.
         * <p>
         * <ul>
         * <li><strong>zh</strong> (default): Chinese.</li>
         * <li><strong>en</strong>: English.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param lang Property lang: The language type of the received message. This parameter is required.
         */
        public Builder lang(final com.aliyun.ros.cdk.core.IResolvable lang) {
            this.props().lang(lang);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudfw.datasource.AddressBooks}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudfw.datasource.AddressBooks build() {
            return new com.aliyun.ros.cdk.cloudfw.datasource.AddressBooks(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.cloudfw.datasource.AddressBooksProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.cloudfw.datasource.AddressBooksProps.Builder();
            }
            return this.props;
        }
    }
}
