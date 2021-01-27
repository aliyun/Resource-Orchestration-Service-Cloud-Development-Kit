package com.aliyun.ros.cdk.cloudfw;

/**
 * A ROS template type:  `ALIYUN::CLOUDFW::AddressBook`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.287Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.RosAddressBook")
public class RosAddressBook extends com.aliyun.ros.cdk.core.RosResource {

    protected RosAddressBook(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosAddressBook(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cloudfw.RosAddressBook.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::CLOUDFW::AddressBook`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosAddressBook(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.RosAddressBookProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupUuid() {
        return software.amazon.jsii.Kernel.get(this, "attrGroupUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", java.util.Objects.requireNonNull(value, "description is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getGroupName() {
        return software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setGroupName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "groupName", java.util.Objects.requireNonNull(value, "groupName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getGroupType() {
        return software.amazon.jsii.Kernel.get(this, "groupType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setGroupType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "groupType", java.util.Objects.requireNonNull(value, "groupType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getAddressList() {
        return software.amazon.jsii.Kernel.get(this, "addressList", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setAddressList(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "addressList", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoAddTagEcs() {
        return software.amazon.jsii.Kernel.get(this, "autoAddTagEcs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoAddTagEcs(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoAddTagEcs", value);
    }

    /**
     */
    public void setAutoAddTagEcs(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoAddTagEcs", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getRegionId() {
        return software.amazon.jsii.Kernel.get(this, "regionId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setRegionId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "regionId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTagList() {
        return software.amazon.jsii.Kernel.get(this, "tagList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTagList(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "tagList", value);
    }

    /**
     */
    public void setTagList(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "tagList", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getTagRelation() {
        return software.amazon.jsii.Kernel.get(this, "tagRelation", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setTagRelation(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "tagRelation", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.RosAddressBook.TagListProperty")
    @software.amazon.jsii.Jsii.Proxy(TagListProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TagListProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getTagKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getTagValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TagListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TagListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TagListProperty> {
            private java.lang.String tagKey;
            private java.lang.String tagValue;

            /**
             * Sets the value of {@link TagListProperty#getTagKey}
             * @param tagKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tagKey(java.lang.String tagKey) {
                this.tagKey = tagKey;
                return this;
            }

            /**
             * Sets the value of {@link TagListProperty#getTagValue}
             * @param tagValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tagValue(java.lang.String tagValue) {
                this.tagValue = tagValue;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TagListProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TagListProperty build() {
                return new Jsii$Proxy(tagKey, tagValue);
            }
        }

        /**
         * An implementation for {@link TagListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TagListProperty {
            private final java.lang.String tagKey;
            private final java.lang.String tagValue;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.tagKey = software.amazon.jsii.Kernel.get(this, "tagKey", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.tagValue = software.amazon.jsii.Kernel.get(this, "tagValue", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String tagKey, final java.lang.String tagValue) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.tagKey = tagKey;
                this.tagValue = tagValue;
            }

            @Override
            public final java.lang.String getTagKey() {
                return this.tagKey;
            }

            @Override
            public final java.lang.String getTagValue() {
                return this.tagValue;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getTagKey() != null) {
                    data.set("tagKey", om.valueToTree(this.getTagKey()));
                }
                if (this.getTagValue() != null) {
                    data.set("tagValue", om.valueToTree(this.getTagValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudfw.RosAddressBook.TagListProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TagListProperty.Jsii$Proxy that = (TagListProperty.Jsii$Proxy) o;

                if (this.tagKey != null ? !this.tagKey.equals(that.tagKey) : that.tagKey != null) return false;
                return this.tagValue != null ? this.tagValue.equals(that.tagValue) : that.tagValue == null;
            }

            @Override
            public final int hashCode() {
                int result = this.tagKey != null ? this.tagKey.hashCode() : 0;
                result = 31 * result + (this.tagValue != null ? this.tagValue.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudfw.RosAddressBook}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudfw.RosAddressBook> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.cloudfw.RosAddressBookProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudfw.RosAddressBookProps.Builder();
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param groupName This parameter is required.
         */
        public Builder groupName(final java.lang.String groupName) {
            this.props.groupName(groupName);
            return this;
        }

        /**
         * @return {@code this}
         * @param groupType This parameter is required.
         */
        public Builder groupType(final java.lang.String groupType) {
            this.props.groupType(groupType);
            return this;
        }

        /**
         * @return {@code this}
         * @param addressList This parameter is required.
         */
        public Builder addressList(final java.lang.String addressList) {
            this.props.addressList(addressList);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoAddTagEcs This parameter is required.
         */
        public Builder autoAddTagEcs(final java.lang.Boolean autoAddTagEcs) {
            this.props.autoAddTagEcs(autoAddTagEcs);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoAddTagEcs This parameter is required.
         */
        public Builder autoAddTagEcs(final com.aliyun.ros.cdk.core.IResolvable autoAddTagEcs) {
            this.props.autoAddTagEcs(autoAddTagEcs);
            return this;
        }

        /**
         * @return {@code this}
         * @param regionId This parameter is required.
         */
        public Builder regionId(final java.lang.String regionId) {
            this.props.regionId(regionId);
            return this;
        }

        /**
         * @return {@code this}
         * @param tagList This parameter is required.
         */
        public Builder tagList(final com.aliyun.ros.cdk.core.IResolvable tagList) {
            this.props.tagList(tagList);
            return this;
        }
        /**
         * @return {@code this}
         * @param tagList This parameter is required.
         */
        public Builder tagList(final java.util.List<? extends java.lang.Object> tagList) {
            this.props.tagList(tagList);
            return this;
        }

        /**
         * @return {@code this}
         * @param tagRelation This parameter is required.
         */
        public Builder tagRelation(final java.lang.String tagRelation) {
            this.props.tagRelation(tagRelation);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cloudfw.RosAddressBook}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudfw.RosAddressBook build() {
            return new com.aliyun.ros.cdk.cloudfw.RosAddressBook(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
