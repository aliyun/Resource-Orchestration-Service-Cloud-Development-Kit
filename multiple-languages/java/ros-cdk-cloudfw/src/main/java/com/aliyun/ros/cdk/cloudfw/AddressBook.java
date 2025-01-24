package com.aliyun.ros.cdk.cloudfw;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CLOUDFW::AddressBook</code>, which is used to create an address book that is used for access control.
 * <p>
 * Address books include IP address books, Elastic Compute Service (ECS) tag-based address books, port address books, and domain address books.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:35.668Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.AddressBook")
public class AddressBook extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cloudfw.IAddressBook {

    protected AddressBook(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AddressBook(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public AddressBook(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.AddressBookProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public AddressBook(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.AddressBookProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute GroupUuid: After a successful return to the address book to add unique identification ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupUuid() {
        return software.amazon.jsii.Kernel.get(this, "attrGroupUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.AddressBookProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cloudfw.AddressBookProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudfw.AddressBook}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudfw.AddressBook> {
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
        private final com.aliyun.ros.cdk.cloudfw.AddressBookProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudfw.AddressBookProps.Builder();
        }

        /**
         * Property description: Address book description.
         * <p>
         * @return {@code this}
         * @param description Property description: Address book description. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Address book description.
         * <p>
         * @return {@code this}
         * @param description Property description: Address book description. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property groupName: Name Address book.
         * <p>
         * @return {@code this}
         * @param groupName Property groupName: Name Address book. This parameter is required.
         */
        public Builder groupName(final java.lang.String groupName) {
            this.props.groupName(groupName);
            return this;
        }
        /**
         * Property groupName: Name Address book.
         * <p>
         * @return {@code this}
         * @param groupName Property groupName: Name Address book. This parameter is required.
         */
        public Builder groupName(final com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.props.groupName(groupName);
            return this;
        }

        /**
         * Property groupType: Type the address book, the optional values ​​are: ip: IP Address Book domain: domain name address book port: Port Address Book tag: ECS label address book.
         * <p>
         * @return {@code this}
         * @param groupType Property groupType: Type the address book, the optional values ​​are: ip: IP Address Book domain: domain name address book port: Port Address Book tag: ECS label address book. This parameter is required.
         */
        public Builder groupType(final java.lang.String groupType) {
            this.props.groupType(groupType);
            return this;
        }
        /**
         * Property groupType: Type the address book, the optional values ​​are: ip: IP Address Book domain: domain name address book port: Port Address Book tag: ECS label address book.
         * <p>
         * @return {@code this}
         * @param groupType Property groupType: Type the address book, the optional values ​​are: ip: IP Address Book domain: domain name address book port: Port Address Book tag: ECS label address book. This parameter is required.
         */
        public Builder groupType(final com.aliyun.ros.cdk.core.IResolvable groupType) {
            this.props.groupType(groupType);
            return this;
        }

        /**
         * Property addressList: Address list of the address book, between multiple addresses separated by commas.
         * <p>
         * Note: When GroupType ip, it must be set to port or domain.
         * When GroupType as ip, address list, fill in the IP address. For example: 1.2.3.4/32, 1.2.3.0/24
         * When GroupType for the port, the address list to fill in ports or port ranges. For example: 80, 100/200
         * When GroupType for the domain, the domain name to fill in the address list. For example: demo1.aliyun.com, demo2.aliyun.com
         * <p>
         * @return {@code this}
         * @param addressList Property addressList: Address list of the address book, between multiple addresses separated by commas. This parameter is required.
         */
        public Builder addressList(final java.lang.String addressList) {
            this.props.addressList(addressList);
            return this;
        }
        /**
         * Property addressList: Address list of the address book, between multiple addresses separated by commas.
         * <p>
         * Note: When GroupType ip, it must be set to port or domain.
         * When GroupType as ip, address list, fill in the IP address. For example: 1.2.3.4/32, 1.2.3.0/24
         * When GroupType for the port, the address list to fill in ports or port ranges. For example: 80, 100/200
         * When GroupType for the domain, the domain name to fill in the address list. For example: demo1.aliyun.com, demo2.aliyun.com
         * <p>
         * @return {@code this}
         * @param addressList Property addressList: Address list of the address book, between multiple addresses separated by commas. This parameter is required.
         */
        public Builder addressList(final com.aliyun.ros.cdk.core.IResolvable addressList) {
            this.props.addressList(addressList);
            return this;
        }

        /**
         * Property autoAddTagEcs: Whether to automatically add new ECS public network IP matching tags to the address book.
         * <p>
         * Default to false.
         * <p>
         * @return {@code this}
         * @param autoAddTagEcs Property autoAddTagEcs: Whether to automatically add new ECS public network IP matching tags to the address book. This parameter is required.
         */
        public Builder autoAddTagEcs(final java.lang.Boolean autoAddTagEcs) {
            this.props.autoAddTagEcs(autoAddTagEcs);
            return this;
        }
        /**
         * Property autoAddTagEcs: Whether to automatically add new ECS public network IP matching tags to the address book.
         * <p>
         * Default to false.
         * <p>
         * @return {@code this}
         * @param autoAddTagEcs Property autoAddTagEcs: Whether to automatically add new ECS public network IP matching tags to the address book. This parameter is required.
         */
        public Builder autoAddTagEcs(final com.aliyun.ros.cdk.core.IResolvable autoAddTagEcs) {
            this.props.autoAddTagEcs(autoAddTagEcs);
            return this;
        }

        /**
         * Property regionId: Region ID.
         * <p>
         * Default to cn-hangzhou.
         * <p>
         * @return {@code this}
         * @param regionId Property regionId: Region ID. This parameter is required.
         */
        public Builder regionId(final java.lang.String regionId) {
            this.props.regionId(regionId);
            return this;
        }
        /**
         * Property regionId: Region ID.
         * <p>
         * Default to cn-hangzhou.
         * <p>
         * @return {@code this}
         * @param regionId Property regionId: Region ID. This parameter is required.
         */
        public Builder regionId(final com.aliyun.ros.cdk.core.IResolvable regionId) {
            this.props.regionId(regionId);
            return this;
        }

        /**
         * Property tagList:.
         * <p>
         * @return {@code this}
         * @param tagList Property tagList:. This parameter is required.
         */
        public Builder tagList(final com.aliyun.ros.cdk.core.IResolvable tagList) {
            this.props.tagList(tagList);
            return this;
        }
        /**
         * Property tagList:.
         * <p>
         * @return {@code this}
         * @param tagList Property tagList:. This parameter is required.
         */
        public Builder tagList(final java.util.List<? extends java.lang.Object> tagList) {
            this.props.tagList(tagList);
            return this;
        }

        /**
         * Property tagRelation: The relationship between the labels to be matched more ECS.
         * <p>
         * and: the relationship between multiple labels "and" that matches both ECS IP public network more tags will be added to the address book.
         * or: a plurality of inter-labeled "or" relationship, i.e., as long as a matching tag ECS ​​public IP address book will be added.
         * <p>
         * @return {@code this}
         * @param tagRelation Property tagRelation: The relationship between the labels to be matched more ECS. This parameter is required.
         */
        public Builder tagRelation(final java.lang.String tagRelation) {
            this.props.tagRelation(tagRelation);
            return this;
        }
        /**
         * Property tagRelation: The relationship between the labels to be matched more ECS.
         * <p>
         * and: the relationship between multiple labels "and" that matches both ECS IP public network more tags will be added to the address book.
         * or: a plurality of inter-labeled "or" relationship, i.e., as long as a matching tag ECS ​​public IP address book will be added.
         * <p>
         * @return {@code this}
         * @param tagRelation Property tagRelation: The relationship between the labels to be matched more ECS. This parameter is required.
         */
        public Builder tagRelation(final com.aliyun.ros.cdk.core.IResolvable tagRelation) {
            this.props.tagRelation(tagRelation);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudfw.AddressBook}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudfw.AddressBook build() {
            return new com.aliyun.ros.cdk.cloudfw.AddressBook(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
