package com.aliyun.ros.cdk.dfs;

/**
 * Properties for defining a <code>ALIYUN::DFS::AccessRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:36.424Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dfs.$Module.class, fqn = "@alicloud/ros-cdk-dfs.AccessRuleProps")
@software.amazon.jsii.Jsii.Proxy(AccessRuleProps.Jsii$Proxy.class)
public interface AccessRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property accessGroupId: The resource ID of Access Group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccessGroupId();

    /**
     * Property networkSegment: The NetworkSegment of the Access Rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNetworkSegment();

    /**
     * Property rwAccessType: The read/write permission of the authorized object on the file system.
     * <p>
     * Values:
     * RDWR (default) : read and write.
     * RDONLY: read-only
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRwAccessType();

    /**
     * Property description: The Description of the Access Rule.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property priority: The Priority of the Access Rule.
     * <p>
     * Valid values: 1 to 100.
     * NOTE: When multiple rules are matched by the same authorized object,
     * the high-priority rule takes effect. 1 is the highest priority.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPriority() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AccessRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AccessRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AccessRuleProps> {
        java.lang.Object accessGroupId;
        java.lang.Object networkSegment;
        java.lang.Object rwAccessType;
        java.lang.Object description;
        java.lang.Object priority;

        /**
         * Sets the value of {@link AccessRuleProps#getAccessGroupId}
         * @param accessGroupId Property accessGroupId: The resource ID of Access Group. This parameter is required.
         * @return {@code this}
         */
        public Builder accessGroupId(java.lang.String accessGroupId) {
            this.accessGroupId = accessGroupId;
            return this;
        }

        /**
         * Sets the value of {@link AccessRuleProps#getAccessGroupId}
         * @param accessGroupId Property accessGroupId: The resource ID of Access Group. This parameter is required.
         * @return {@code this}
         */
        public Builder accessGroupId(com.aliyun.ros.cdk.core.IResolvable accessGroupId) {
            this.accessGroupId = accessGroupId;
            return this;
        }

        /**
         * Sets the value of {@link AccessRuleProps#getNetworkSegment}
         * @param networkSegment Property networkSegment: The NetworkSegment of the Access Rule. This parameter is required.
         * @return {@code this}
         */
        public Builder networkSegment(java.lang.String networkSegment) {
            this.networkSegment = networkSegment;
            return this;
        }

        /**
         * Sets the value of {@link AccessRuleProps#getNetworkSegment}
         * @param networkSegment Property networkSegment: The NetworkSegment of the Access Rule. This parameter is required.
         * @return {@code this}
         */
        public Builder networkSegment(com.aliyun.ros.cdk.core.IResolvable networkSegment) {
            this.networkSegment = networkSegment;
            return this;
        }

        /**
         * Sets the value of {@link AccessRuleProps#getRwAccessType}
         * @param rwAccessType Property rwAccessType: The read/write permission of the authorized object on the file system. This parameter is required.
         *                     Values:
         *                     RDWR (default) : read and write.
         *                     RDONLY: read-only
         * @return {@code this}
         */
        public Builder rwAccessType(java.lang.String rwAccessType) {
            this.rwAccessType = rwAccessType;
            return this;
        }

        /**
         * Sets the value of {@link AccessRuleProps#getRwAccessType}
         * @param rwAccessType Property rwAccessType: The read/write permission of the authorized object on the file system. This parameter is required.
         *                     Values:
         *                     RDWR (default) : read and write.
         *                     RDONLY: read-only
         * @return {@code this}
         */
        public Builder rwAccessType(com.aliyun.ros.cdk.core.IResolvable rwAccessType) {
            this.rwAccessType = rwAccessType;
            return this;
        }

        /**
         * Sets the value of {@link AccessRuleProps#getDescription}
         * @param description Property description: The Description of the Access Rule.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link AccessRuleProps#getDescription}
         * @param description Property description: The Description of the Access Rule.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link AccessRuleProps#getPriority}
         * @param priority Property priority: The Priority of the Access Rule.
         *                 Valid values: 1 to 100.
         *                 NOTE: When multiple rules are matched by the same authorized object,
         *                 the high-priority rule takes effect. 1 is the highest priority.
         * @return {@code this}
         */
        public Builder priority(java.lang.Number priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link AccessRuleProps#getPriority}
         * @param priority Property priority: The Priority of the Access Rule.
         *                 Valid values: 1 to 100.
         *                 NOTE: When multiple rules are matched by the same authorized object,
         *                 the high-priority rule takes effect. 1 is the highest priority.
         * @return {@code this}
         */
        public Builder priority(com.aliyun.ros.cdk.core.IResolvable priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AccessRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AccessRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AccessRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AccessRuleProps {
        private final java.lang.Object accessGroupId;
        private final java.lang.Object networkSegment;
        private final java.lang.Object rwAccessType;
        private final java.lang.Object description;
        private final java.lang.Object priority;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accessGroupId = software.amazon.jsii.Kernel.get(this, "accessGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkSegment = software.amazon.jsii.Kernel.get(this, "networkSegment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rwAccessType = software.amazon.jsii.Kernel.get(this, "rwAccessType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accessGroupId = java.util.Objects.requireNonNull(builder.accessGroupId, "accessGroupId is required");
            this.networkSegment = java.util.Objects.requireNonNull(builder.networkSegment, "networkSegment is required");
            this.rwAccessType = java.util.Objects.requireNonNull(builder.rwAccessType, "rwAccessType is required");
            this.description = builder.description;
            this.priority = builder.priority;
        }

        @Override
        public final java.lang.Object getAccessGroupId() {
            return this.accessGroupId;
        }

        @Override
        public final java.lang.Object getNetworkSegment() {
            return this.networkSegment;
        }

        @Override
        public final java.lang.Object getRwAccessType() {
            return this.rwAccessType;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getPriority() {
            return this.priority;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accessGroupId", om.valueToTree(this.getAccessGroupId()));
            data.set("networkSegment", om.valueToTree(this.getNetworkSegment()));
            data.set("rwAccessType", om.valueToTree(this.getRwAccessType()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getPriority() != null) {
                data.set("priority", om.valueToTree(this.getPriority()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dfs.AccessRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AccessRuleProps.Jsii$Proxy that = (AccessRuleProps.Jsii$Proxy) o;

            if (!accessGroupId.equals(that.accessGroupId)) return false;
            if (!networkSegment.equals(that.networkSegment)) return false;
            if (!rwAccessType.equals(that.rwAccessType)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.priority != null ? this.priority.equals(that.priority) : that.priority == null;
        }

        @Override
        public final int hashCode() {
            int result = this.accessGroupId.hashCode();
            result = 31 * result + (this.networkSegment.hashCode());
            result = 31 * result + (this.rwAccessType.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.priority != null ? this.priority.hashCode() : 0);
            return result;
        }
    }
}
