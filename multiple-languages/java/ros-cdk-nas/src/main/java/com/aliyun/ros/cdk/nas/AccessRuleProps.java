package com.aliyun.ros.cdk.nas;

/**
 * Properties for defining a `ALIYUN::NAS::AccessRule`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-13T06:46:15.434Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.AccessRuleProps")
@software.amazon.jsii.Jsii.Proxy(AccessRuleProps.Jsii$Proxy.class)
public interface AccessRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property accessGroupName: Permission group name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccessGroupName();

    /**
     * Property sourceCidrIp: Address or address segment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceCidrIp();

    /**
     * Property priority: Priority level.
     * <p>
     * Range: 1-100. Default value: 1
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPriority() {
        return null;
    }

    /**
     * Property rwAccessType: Read-write permission type: RDWR (default), RDONLY.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRwAccessType() {
        return null;
    }

    /**
     * Property userAccessType: User permission type: no_squash (default), root_squash, all_squash.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserAccessType() {
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
        java.lang.Object accessGroupName;
        java.lang.Object sourceCidrIp;
        java.lang.Object priority;
        java.lang.Object rwAccessType;
        java.lang.Object userAccessType;

        /**
         * Sets the value of {@link AccessRuleProps#getAccessGroupName}
         * @param accessGroupName Property accessGroupName: Permission group name. This parameter is required.
         * @return {@code this}
         */
        public Builder accessGroupName(java.lang.String accessGroupName) {
            this.accessGroupName = accessGroupName;
            return this;
        }

        /**
         * Sets the value of {@link AccessRuleProps#getAccessGroupName}
         * @param accessGroupName Property accessGroupName: Permission group name. This parameter is required.
         * @return {@code this}
         */
        public Builder accessGroupName(com.aliyun.ros.cdk.core.IResolvable accessGroupName) {
            this.accessGroupName = accessGroupName;
            return this;
        }

        /**
         * Sets the value of {@link AccessRuleProps#getSourceCidrIp}
         * @param sourceCidrIp Property sourceCidrIp: Address or address segment. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceCidrIp(java.lang.String sourceCidrIp) {
            this.sourceCidrIp = sourceCidrIp;
            return this;
        }

        /**
         * Sets the value of {@link AccessRuleProps#getSourceCidrIp}
         * @param sourceCidrIp Property sourceCidrIp: Address or address segment. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceCidrIp(com.aliyun.ros.cdk.core.IResolvable sourceCidrIp) {
            this.sourceCidrIp = sourceCidrIp;
            return this;
        }

        /**
         * Sets the value of {@link AccessRuleProps#getPriority}
         * @param priority Property priority: Priority level.
         *                 Range: 1-100. Default value: 1
         * @return {@code this}
         */
        public Builder priority(java.lang.Number priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link AccessRuleProps#getPriority}
         * @param priority Property priority: Priority level.
         *                 Range: 1-100. Default value: 1
         * @return {@code this}
         */
        public Builder priority(com.aliyun.ros.cdk.core.IResolvable priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link AccessRuleProps#getRwAccessType}
         * @param rwAccessType Property rwAccessType: Read-write permission type: RDWR (default), RDONLY.
         * @return {@code this}
         */
        public Builder rwAccessType(java.lang.String rwAccessType) {
            this.rwAccessType = rwAccessType;
            return this;
        }

        /**
         * Sets the value of {@link AccessRuleProps#getRwAccessType}
         * @param rwAccessType Property rwAccessType: Read-write permission type: RDWR (default), RDONLY.
         * @return {@code this}
         */
        public Builder rwAccessType(com.aliyun.ros.cdk.core.IResolvable rwAccessType) {
            this.rwAccessType = rwAccessType;
            return this;
        }

        /**
         * Sets the value of {@link AccessRuleProps#getUserAccessType}
         * @param userAccessType Property userAccessType: User permission type: no_squash (default), root_squash, all_squash.
         * @return {@code this}
         */
        public Builder userAccessType(java.lang.String userAccessType) {
            this.userAccessType = userAccessType;
            return this;
        }

        /**
         * Sets the value of {@link AccessRuleProps#getUserAccessType}
         * @param userAccessType Property userAccessType: User permission type: no_squash (default), root_squash, all_squash.
         * @return {@code this}
         */
        public Builder userAccessType(com.aliyun.ros.cdk.core.IResolvable userAccessType) {
            this.userAccessType = userAccessType;
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
        private final java.lang.Object accessGroupName;
        private final java.lang.Object sourceCidrIp;
        private final java.lang.Object priority;
        private final java.lang.Object rwAccessType;
        private final java.lang.Object userAccessType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accessGroupName = software.amazon.jsii.Kernel.get(this, "accessGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceCidrIp = software.amazon.jsii.Kernel.get(this, "sourceCidrIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rwAccessType = software.amazon.jsii.Kernel.get(this, "rwAccessType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userAccessType = software.amazon.jsii.Kernel.get(this, "userAccessType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accessGroupName = java.util.Objects.requireNonNull(builder.accessGroupName, "accessGroupName is required");
            this.sourceCidrIp = java.util.Objects.requireNonNull(builder.sourceCidrIp, "sourceCidrIp is required");
            this.priority = builder.priority;
            this.rwAccessType = builder.rwAccessType;
            this.userAccessType = builder.userAccessType;
        }

        @Override
        public final java.lang.Object getAccessGroupName() {
            return this.accessGroupName;
        }

        @Override
        public final java.lang.Object getSourceCidrIp() {
            return this.sourceCidrIp;
        }

        @Override
        public final java.lang.Object getPriority() {
            return this.priority;
        }

        @Override
        public final java.lang.Object getRwAccessType() {
            return this.rwAccessType;
        }

        @Override
        public final java.lang.Object getUserAccessType() {
            return this.userAccessType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accessGroupName", om.valueToTree(this.getAccessGroupName()));
            data.set("sourceCidrIp", om.valueToTree(this.getSourceCidrIp()));
            if (this.getPriority() != null) {
                data.set("priority", om.valueToTree(this.getPriority()));
            }
            if (this.getRwAccessType() != null) {
                data.set("rwAccessType", om.valueToTree(this.getRwAccessType()));
            }
            if (this.getUserAccessType() != null) {
                data.set("userAccessType", om.valueToTree(this.getUserAccessType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nas.AccessRuleProps"));
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

            if (!accessGroupName.equals(that.accessGroupName)) return false;
            if (!sourceCidrIp.equals(that.sourceCidrIp)) return false;
            if (this.priority != null ? !this.priority.equals(that.priority) : that.priority != null) return false;
            if (this.rwAccessType != null ? !this.rwAccessType.equals(that.rwAccessType) : that.rwAccessType != null) return false;
            return this.userAccessType != null ? this.userAccessType.equals(that.userAccessType) : that.userAccessType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.accessGroupName.hashCode();
            result = 31 * result + (this.sourceCidrIp.hashCode());
            result = 31 * result + (this.priority != null ? this.priority.hashCode() : 0);
            result = 31 * result + (this.rwAccessType != null ? this.rwAccessType.hashCode() : 0);
            result = 31 * result + (this.userAccessType != null ? this.userAccessType.hashCode() : 0);
            return result;
        }
    }
}
