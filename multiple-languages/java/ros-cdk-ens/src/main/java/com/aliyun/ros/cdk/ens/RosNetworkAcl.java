package com.aliyun.ros.cdk.ens;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ENS::NetworkAcl</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:55.398Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ens.$Module.class, fqn = "@alicloud/ros-cdk-ens.RosNetworkAcl")
public class RosNetworkAcl extends com.aliyun.ros.cdk.core.RosResource {

    protected RosNetworkAcl(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosNetworkAcl(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ens.RosNetworkAcl.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosNetworkAcl(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ens.RosNetworkAclProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNetworkAclId() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkAclId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAclEntries() {
        return software.amazon.jsii.Kernel.get(this, "aclEntries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAclEntries(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "aclEntries", value);
    }

    /**
     */
    public void setAclEntries(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ens.RosNetworkAcl.AclEntriesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ens.RosNetworkAcl.AclEntriesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "aclEntries", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getNetworkAclName() {
        return software.amazon.jsii.Kernel.get(this, "networkAclName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNetworkAclName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "networkAclName", value);
    }

    /**
     */
    public void setNetworkAclName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "networkAclName", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ens.$Module.class, fqn = "@alicloud/ros-cdk-ens.RosNetworkAcl.AclEntriesProperty")
    @software.amazon.jsii.Jsii.Proxy(AclEntriesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AclEntriesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCidrBlock();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDirection();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPolicy();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPortRange();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPriority();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getProtocol();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkAclEntryName() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AclEntriesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AclEntriesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AclEntriesProperty> {
            java.lang.Object cidrBlock;
            java.lang.Object direction;
            java.lang.Object policy;
            java.lang.Object portRange;
            java.lang.Object priority;
            java.lang.Object protocol;
            java.lang.Object description;
            java.lang.Object networkAclEntryName;

            /**
             * Sets the value of {@link AclEntriesProperty#getCidrBlock}
             * @param cidrBlock the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cidrBlock(java.lang.String cidrBlock) {
                this.cidrBlock = cidrBlock;
                return this;
            }

            /**
             * Sets the value of {@link AclEntriesProperty#getCidrBlock}
             * @param cidrBlock the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cidrBlock(com.aliyun.ros.cdk.core.IResolvable cidrBlock) {
                this.cidrBlock = cidrBlock;
                return this;
            }

            /**
             * Sets the value of {@link AclEntriesProperty#getDirection}
             * @param direction the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder direction(java.lang.String direction) {
                this.direction = direction;
                return this;
            }

            /**
             * Sets the value of {@link AclEntriesProperty#getDirection}
             * @param direction the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder direction(com.aliyun.ros.cdk.core.IResolvable direction) {
                this.direction = direction;
                return this;
            }

            /**
             * Sets the value of {@link AclEntriesProperty#getPolicy}
             * @param policy the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder policy(java.lang.String policy) {
                this.policy = policy;
                return this;
            }

            /**
             * Sets the value of {@link AclEntriesProperty#getPolicy}
             * @param policy the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder policy(com.aliyun.ros.cdk.core.IResolvable policy) {
                this.policy = policy;
                return this;
            }

            /**
             * Sets the value of {@link AclEntriesProperty#getPortRange}
             * @param portRange the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder portRange(java.lang.String portRange) {
                this.portRange = portRange;
                return this;
            }

            /**
             * Sets the value of {@link AclEntriesProperty#getPortRange}
             * @param portRange the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder portRange(com.aliyun.ros.cdk.core.IResolvable portRange) {
                this.portRange = portRange;
                return this;
            }

            /**
             * Sets the value of {@link AclEntriesProperty#getPriority}
             * @param priority the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder priority(java.lang.Number priority) {
                this.priority = priority;
                return this;
            }

            /**
             * Sets the value of {@link AclEntriesProperty#getPriority}
             * @param priority the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder priority(com.aliyun.ros.cdk.core.IResolvable priority) {
                this.priority = priority;
                return this;
            }

            /**
             * Sets the value of {@link AclEntriesProperty#getProtocol}
             * @param protocol the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(java.lang.String protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Sets the value of {@link AclEntriesProperty#getProtocol}
             * @param protocol the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(com.aliyun.ros.cdk.core.IResolvable protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Sets the value of {@link AclEntriesProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(java.lang.String description) {
                this.description = description;
                return this;
            }

            /**
             * Sets the value of {@link AclEntriesProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
                this.description = description;
                return this;
            }

            /**
             * Sets the value of {@link AclEntriesProperty#getNetworkAclEntryName}
             * @param networkAclEntryName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder networkAclEntryName(java.lang.String networkAclEntryName) {
                this.networkAclEntryName = networkAclEntryName;
                return this;
            }

            /**
             * Sets the value of {@link AclEntriesProperty#getNetworkAclEntryName}
             * @param networkAclEntryName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder networkAclEntryName(com.aliyun.ros.cdk.core.IResolvable networkAclEntryName) {
                this.networkAclEntryName = networkAclEntryName;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AclEntriesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AclEntriesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AclEntriesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AclEntriesProperty {
            private final java.lang.Object cidrBlock;
            private final java.lang.Object direction;
            private final java.lang.Object policy;
            private final java.lang.Object portRange;
            private final java.lang.Object priority;
            private final java.lang.Object protocol;
            private final java.lang.Object description;
            private final java.lang.Object networkAclEntryName;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.cidrBlock = software.amazon.jsii.Kernel.get(this, "cidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.direction = software.amazon.jsii.Kernel.get(this, "direction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.policy = software.amazon.jsii.Kernel.get(this, "policy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.portRange = software.amazon.jsii.Kernel.get(this, "portRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.networkAclEntryName = software.amazon.jsii.Kernel.get(this, "networkAclEntryName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.cidrBlock = java.util.Objects.requireNonNull(builder.cidrBlock, "cidrBlock is required");
                this.direction = java.util.Objects.requireNonNull(builder.direction, "direction is required");
                this.policy = java.util.Objects.requireNonNull(builder.policy, "policy is required");
                this.portRange = java.util.Objects.requireNonNull(builder.portRange, "portRange is required");
                this.priority = java.util.Objects.requireNonNull(builder.priority, "priority is required");
                this.protocol = java.util.Objects.requireNonNull(builder.protocol, "protocol is required");
                this.description = builder.description;
                this.networkAclEntryName = builder.networkAclEntryName;
            }

            @Override
            public final java.lang.Object getCidrBlock() {
                return this.cidrBlock;
            }

            @Override
            public final java.lang.Object getDirection() {
                return this.direction;
            }

            @Override
            public final java.lang.Object getPolicy() {
                return this.policy;
            }

            @Override
            public final java.lang.Object getPortRange() {
                return this.portRange;
            }

            @Override
            public final java.lang.Object getPriority() {
                return this.priority;
            }

            @Override
            public final java.lang.Object getProtocol() {
                return this.protocol;
            }

            @Override
            public final java.lang.Object getDescription() {
                return this.description;
            }

            @Override
            public final java.lang.Object getNetworkAclEntryName() {
                return this.networkAclEntryName;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("cidrBlock", om.valueToTree(this.getCidrBlock()));
                data.set("direction", om.valueToTree(this.getDirection()));
                data.set("policy", om.valueToTree(this.getPolicy()));
                data.set("portRange", om.valueToTree(this.getPortRange()));
                data.set("priority", om.valueToTree(this.getPriority()));
                data.set("protocol", om.valueToTree(this.getProtocol()));
                if (this.getDescription() != null) {
                    data.set("description", om.valueToTree(this.getDescription()));
                }
                if (this.getNetworkAclEntryName() != null) {
                    data.set("networkAclEntryName", om.valueToTree(this.getNetworkAclEntryName()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ens.RosNetworkAcl.AclEntriesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AclEntriesProperty.Jsii$Proxy that = (AclEntriesProperty.Jsii$Proxy) o;

                if (!cidrBlock.equals(that.cidrBlock)) return false;
                if (!direction.equals(that.direction)) return false;
                if (!policy.equals(that.policy)) return false;
                if (!portRange.equals(that.portRange)) return false;
                if (!priority.equals(that.priority)) return false;
                if (!protocol.equals(that.protocol)) return false;
                if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
                return this.networkAclEntryName != null ? this.networkAclEntryName.equals(that.networkAclEntryName) : that.networkAclEntryName == null;
            }

            @Override
            public final int hashCode() {
                int result = this.cidrBlock.hashCode();
                result = 31 * result + (this.direction.hashCode());
                result = 31 * result + (this.policy.hashCode());
                result = 31 * result + (this.portRange.hashCode());
                result = 31 * result + (this.priority.hashCode());
                result = 31 * result + (this.protocol.hashCode());
                result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
                result = 31 * result + (this.networkAclEntryName != null ? this.networkAclEntryName.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ens.RosNetworkAcl}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ens.RosNetworkAcl> {
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
        private final com.aliyun.ros.cdk.ens.RosNetworkAclProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ens.RosNetworkAclProps.Builder();
        }

        /**
         * @return {@code this}
         * @param aclEntries This parameter is required.
         */
        public Builder aclEntries(final com.aliyun.ros.cdk.core.IResolvable aclEntries) {
            this.props.aclEntries(aclEntries);
            return this;
        }
        /**
         * @return {@code this}
         * @param aclEntries This parameter is required.
         */
        public Builder aclEntries(final java.util.List<? extends java.lang.Object> aclEntries) {
            this.props.aclEntries(aclEntries);
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
         * @param networkAclName This parameter is required.
         */
        public Builder networkAclName(final java.lang.String networkAclName) {
            this.props.networkAclName(networkAclName);
            return this;
        }
        /**
         * @return {@code this}
         * @param networkAclName This parameter is required.
         */
        public Builder networkAclName(final com.aliyun.ros.cdk.core.IResolvable networkAclName) {
            this.props.networkAclName(networkAclName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ens.RosNetworkAcl}.
         */
        @Override
        public com.aliyun.ros.cdk.ens.RosNetworkAcl build() {
            return new com.aliyun.ros.cdk.ens.RosNetworkAcl(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
