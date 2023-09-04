package com.aliyun.ros.cdk.ecs;

/**
 * A ROS template type:  <code>ALIYUN::ECS::PrefixList</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:37.107Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosPrefixList")
public class RosPrefixList extends com.aliyun.ros.cdk.core.RosResource {

    protected RosPrefixList(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosPrefixList(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ecs.RosPrefixList.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::ECS::PrefixList</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosPrefixList(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.RosPrefixListProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrefixListId() {
        return software.amazon.jsii.Kernel.get(this, "attrPrefixListId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAddressFamily() {
        return software.amazon.jsii.Kernel.get(this, "addressFamily", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAddressFamily(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "addressFamily", java.util.Objects.requireNonNull(value, "addressFamily is required"));
    }

    /**
     */
    public void setAddressFamily(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "addressFamily", java.util.Objects.requireNonNull(value, "addressFamily is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getMaxEntries() {
        return software.amazon.jsii.Kernel.get(this, "maxEntries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaxEntries(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maxEntries", java.util.Objects.requireNonNull(value, "maxEntries is required"));
    }

    /**
     */
    public void setMaxEntries(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maxEntries", java.util.Objects.requireNonNull(value, "maxEntries is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPrefixListName() {
        return software.amazon.jsii.Kernel.get(this, "prefixListName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPrefixListName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "prefixListName", java.util.Objects.requireNonNull(value, "prefixListName is required"));
    }

    /**
     */
    public void setPrefixListName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "prefixListName", java.util.Objects.requireNonNull(value, "prefixListName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEntries() {
        return software.amazon.jsii.Kernel.get(this, "entries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEntries(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "entries", value);
    }

    /**
     */
    public void setEntries(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ecs.RosPrefixList.EntriesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ecs.RosPrefixList.EntriesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "entries", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosPrefixList.EntriesProperty")
    @software.amazon.jsii.Jsii.Proxy(EntriesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface EntriesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCidr();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link EntriesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link EntriesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<EntriesProperty> {
            java.lang.Object cidr;
            java.lang.Object description;

            /**
             * Sets the value of {@link EntriesProperty#getCidr}
             * @param cidr the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cidr(java.lang.String cidr) {
                this.cidr = cidr;
                return this;
            }

            /**
             * Sets the value of {@link EntriesProperty#getCidr}
             * @param cidr the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cidr(com.aliyun.ros.cdk.core.IResolvable cidr) {
                this.cidr = cidr;
                return this;
            }

            /**
             * Sets the value of {@link EntriesProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(java.lang.String description) {
                this.description = description;
                return this;
            }

            /**
             * Sets the value of {@link EntriesProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
                this.description = description;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link EntriesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public EntriesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link EntriesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EntriesProperty {
            private final java.lang.Object cidr;
            private final java.lang.Object description;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.cidr = software.amazon.jsii.Kernel.get(this, "cidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.cidr = java.util.Objects.requireNonNull(builder.cidr, "cidr is required");
                this.description = builder.description;
            }

            @Override
            public final java.lang.Object getCidr() {
                return this.cidr;
            }

            @Override
            public final java.lang.Object getDescription() {
                return this.description;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("cidr", om.valueToTree(this.getCidr()));
                if (this.getDescription() != null) {
                    data.set("description", om.valueToTree(this.getDescription()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosPrefixList.EntriesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                EntriesProperty.Jsii$Proxy that = (EntriesProperty.Jsii$Proxy) o;

                if (!cidr.equals(that.cidr)) return false;
                return this.description != null ? this.description.equals(that.description) : that.description == null;
            }

            @Override
            public final int hashCode() {
                int result = this.cidr.hashCode();
                result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.RosPrefixList}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.RosPrefixList> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ecs.RosPrefixListProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.RosPrefixListProps.Builder();
        }

        /**
         * @return {@code this}
         * @param addressFamily This parameter is required.
         */
        public Builder addressFamily(final java.lang.String addressFamily) {
            this.props.addressFamily(addressFamily);
            return this;
        }
        /**
         * @return {@code this}
         * @param addressFamily This parameter is required.
         */
        public Builder addressFamily(final com.aliyun.ros.cdk.core.IResolvable addressFamily) {
            this.props.addressFamily(addressFamily);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxEntries This parameter is required.
         */
        public Builder maxEntries(final java.lang.Number maxEntries) {
            this.props.maxEntries(maxEntries);
            return this;
        }
        /**
         * @return {@code this}
         * @param maxEntries This parameter is required.
         */
        public Builder maxEntries(final com.aliyun.ros.cdk.core.IResolvable maxEntries) {
            this.props.maxEntries(maxEntries);
            return this;
        }

        /**
         * @return {@code this}
         * @param prefixListName This parameter is required.
         */
        public Builder prefixListName(final java.lang.String prefixListName) {
            this.props.prefixListName(prefixListName);
            return this;
        }
        /**
         * @return {@code this}
         * @param prefixListName This parameter is required.
         */
        public Builder prefixListName(final com.aliyun.ros.cdk.core.IResolvable prefixListName) {
            this.props.prefixListName(prefixListName);
            return this;
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
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param entries This parameter is required.
         */
        public Builder entries(final com.aliyun.ros.cdk.core.IResolvable entries) {
            this.props.entries(entries);
            return this;
        }
        /**
         * @return {@code this}
         * @param entries This parameter is required.
         */
        public Builder entries(final java.util.List<? extends java.lang.Object> entries) {
            this.props.entries(entries);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.RosPrefixList}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.RosPrefixList build() {
            return new com.aliyun.ros.cdk.ecs.RosPrefixList(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
