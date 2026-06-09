package com.aliyun.ros.cdk.bastionhost;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::BastionHost::HostAccountUserGroupAttachment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:35:53.526Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.bastionhost.$Module.class, fqn = "@alicloud/ros-cdk-bastionhost.RosHostAccountUserGroupAttachment")
public class RosHostAccountUserGroupAttachment extends com.aliyun.ros.cdk.core.RosResource {

    protected RosHostAccountUserGroupAttachment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosHostAccountUserGroupAttachment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.bastionhost.RosHostAccountUserGroupAttachment.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosHostAccountUserGroupAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bastionhost.RosHostAccountUserGroupAttachmentProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getHosts() {
        return software.amazon.jsii.Kernel.get(this, "hosts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHosts(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "hosts", java.util.Objects.requireNonNull(value, "hosts is required"));
    }

    /**
     */
    public void setHosts(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.bastionhost.RosHostAccountUserGroupAttachment.HostsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.bastionhost.RosHostAccountUserGroupAttachment.HostsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "hosts", java.util.Objects.requireNonNull(value, "hosts is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", java.util.Objects.requireNonNull(value, "instanceId is required"));
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", java.util.Objects.requireNonNull(value, "instanceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getUserGroupId() {
        return software.amazon.jsii.Kernel.get(this, "userGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUserGroupId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "userGroupId", java.util.Objects.requireNonNull(value, "userGroupId is required"));
    }

    /**
     */
    public void setUserGroupId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "userGroupId", java.util.Objects.requireNonNull(value, "userGroupId is required"));
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.bastionhost.$Module.class, fqn = "@alicloud/ros-cdk-bastionhost.RosHostAccountUserGroupAttachment.HostsProperty")
    @software.amazon.jsii.Jsii.Proxy(HostsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface HostsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getHostId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHostAccountIds() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link HostsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link HostsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<HostsProperty> {
            java.lang.Object hostId;
            java.lang.Object hostAccountIds;

            /**
             * Sets the value of {@link HostsProperty#getHostId}
             * @param hostId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostId(java.lang.String hostId) {
                this.hostId = hostId;
                return this;
            }

            /**
             * Sets the value of {@link HostsProperty#getHostId}
             * @param hostId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostId(com.aliyun.ros.cdk.core.IResolvable hostId) {
                this.hostId = hostId;
                return this;
            }

            /**
             * Sets the value of {@link HostsProperty#getHostAccountIds}
             * @param hostAccountIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostAccountIds(com.aliyun.ros.cdk.core.IResolvable hostAccountIds) {
                this.hostAccountIds = hostAccountIds;
                return this;
            }

            /**
             * Sets the value of {@link HostsProperty#getHostAccountIds}
             * @param hostAccountIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostAccountIds(java.util.List<? extends java.lang.Object> hostAccountIds) {
                this.hostAccountIds = hostAccountIds;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link HostsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public HostsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link HostsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HostsProperty {
            private final java.lang.Object hostId;
            private final java.lang.Object hostAccountIds;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.hostId = software.amazon.jsii.Kernel.get(this, "hostId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.hostAccountIds = software.amazon.jsii.Kernel.get(this, "hostAccountIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.hostId = java.util.Objects.requireNonNull(builder.hostId, "hostId is required");
                this.hostAccountIds = builder.hostAccountIds;
            }

            @Override
            public final java.lang.Object getHostId() {
                return this.hostId;
            }

            @Override
            public final java.lang.Object getHostAccountIds() {
                return this.hostAccountIds;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("hostId", om.valueToTree(this.getHostId()));
                if (this.getHostAccountIds() != null) {
                    data.set("hostAccountIds", om.valueToTree(this.getHostAccountIds()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-bastionhost.RosHostAccountUserGroupAttachment.HostsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                HostsProperty.Jsii$Proxy that = (HostsProperty.Jsii$Proxy) o;

                if (!hostId.equals(that.hostId)) return false;
                return this.hostAccountIds != null ? this.hostAccountIds.equals(that.hostAccountIds) : that.hostAccountIds == null;
            }

            @Override
            public final int hashCode() {
                int result = this.hostId.hashCode();
                result = 31 * result + (this.hostAccountIds != null ? this.hostAccountIds.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.bastionhost.RosHostAccountUserGroupAttachment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.bastionhost.RosHostAccountUserGroupAttachment> {
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
        private final com.aliyun.ros.cdk.bastionhost.RosHostAccountUserGroupAttachmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.bastionhost.RosHostAccountUserGroupAttachmentProps.Builder();
        }

        /**
         * @return {@code this}
         * @param hosts This parameter is required.
         */
        public Builder hosts(final com.aliyun.ros.cdk.core.IResolvable hosts) {
            this.props.hosts(hosts);
            return this;
        }
        /**
         * @return {@code this}
         * @param hosts This parameter is required.
         */
        public Builder hosts(final java.util.List<? extends java.lang.Object> hosts) {
            this.props.hosts(hosts);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param userGroupId This parameter is required.
         */
        public Builder userGroupId(final java.lang.String userGroupId) {
            this.props.userGroupId(userGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param userGroupId This parameter is required.
         */
        public Builder userGroupId(final com.aliyun.ros.cdk.core.IResolvable userGroupId) {
            this.props.userGroupId(userGroupId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.bastionhost.RosHostAccountUserGroupAttachment}.
         */
        @Override
        public com.aliyun.ros.cdk.bastionhost.RosHostAccountUserGroupAttachment build() {
            return new com.aliyun.ros.cdk.bastionhost.RosHostAccountUserGroupAttachment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
