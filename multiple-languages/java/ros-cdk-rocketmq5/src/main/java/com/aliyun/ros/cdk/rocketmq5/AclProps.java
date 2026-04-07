package com.aliyun.ros.cdk.rocketmq5;

/**
 * Properties for defining a <code>Acl</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-acl
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:29.610Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rocketmq5.$Module.class, fqn = "@alicloud/ros-cdk-rocketmq5.AclProps")
@software.amazon.jsii.Jsii.Proxy(AclProps.Jsii$Proxy.class)
public interface AclProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property actions: The type of operation authorized.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getActions();

    /**
     * Property decision: The decision result of the authorization.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Deny: Access is denied.</li>
     * <li>Allow: Allow access.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDecision();

    /**
     * Property instanceId: The ID of the RocketMQ instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property resourceName: The name of the resource on which you want to grant permissions.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getResourceName();

    /**
     * Property resourceType: The type of the resource on which you want to grant permissions.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Group: consumer Group.</li>
     * <li>Topic: Topic.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getResourceType();

    /**
     * Property username: The username of the account.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUsername();

    /**
     * Property ipWhitelists: The IP addresses in the whitelist.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpWhitelists() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AclProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AclProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AclProps> {
        java.lang.Object actions;
        java.lang.Object decision;
        java.lang.Object instanceId;
        java.lang.Object resourceName;
        java.lang.Object resourceType;
        java.lang.Object username;
        java.lang.Object ipWhitelists;

        /**
         * Sets the value of {@link AclProps#getActions}
         * @param actions Property actions: The type of operation authorized. This parameter is required.
         * @return {@code this}
         */
        public Builder actions(com.aliyun.ros.cdk.core.IResolvable actions) {
            this.actions = actions;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getActions}
         * @param actions Property actions: The type of operation authorized. This parameter is required.
         * @return {@code this}
         */
        public Builder actions(java.util.List<? extends java.lang.Object> actions) {
            this.actions = actions;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getDecision}
         * @param decision Property decision: The decision result of the authorization. This parameter is required.
         *                 Valid values:
         *                 <p>
         *                 <ul>
         *                 <li>Deny: Access is denied.</li>
         *                 <li>Allow: Allow access.</li>
         *                 </ul>
         * @return {@code this}
         */
        public Builder decision(java.lang.String decision) {
            this.decision = decision;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getDecision}
         * @param decision Property decision: The decision result of the authorization. This parameter is required.
         *                 Valid values:
         *                 <p>
         *                 <ul>
         *                 <li>Deny: Access is denied.</li>
         *                 <li>Allow: Allow access.</li>
         *                 </ul>
         * @return {@code this}
         */
        public Builder decision(com.aliyun.ros.cdk.core.IResolvable decision) {
            this.decision = decision;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the RocketMQ instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the RocketMQ instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getResourceName}
         * @param resourceName Property resourceName: The name of the resource on which you want to grant permissions. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceName(java.lang.String resourceName) {
            this.resourceName = resourceName;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getResourceName}
         * @param resourceName Property resourceName: The name of the resource on which you want to grant permissions. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceName(com.aliyun.ros.cdk.core.IResolvable resourceName) {
            this.resourceName = resourceName;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getResourceType}
         * @param resourceType Property resourceType: The type of the resource on which you want to grant permissions. This parameter is required.
         *                     Valid values:
         *                     <p>
         *                     <ul>
         *                     <li>Group: consumer Group.</li>
         *                     <li>Topic: Topic.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder resourceType(java.lang.String resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getResourceType}
         * @param resourceType Property resourceType: The type of the resource on which you want to grant permissions. This parameter is required.
         *                     Valid values:
         *                     <p>
         *                     <ul>
         *                     <li>Group: consumer Group.</li>
         *                     <li>Topic: Topic.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder resourceType(com.aliyun.ros.cdk.core.IResolvable resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getUsername}
         * @param username Property username: The username of the account. This parameter is required.
         * @return {@code this}
         */
        public Builder username(java.lang.String username) {
            this.username = username;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getUsername}
         * @param username Property username: The username of the account. This parameter is required.
         * @return {@code this}
         */
        public Builder username(com.aliyun.ros.cdk.core.IResolvable username) {
            this.username = username;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getIpWhitelists}
         * @param ipWhitelists Property ipWhitelists: The IP addresses in the whitelist.
         * @return {@code this}
         */
        public Builder ipWhitelists(com.aliyun.ros.cdk.core.IResolvable ipWhitelists) {
            this.ipWhitelists = ipWhitelists;
            return this;
        }

        /**
         * Sets the value of {@link AclProps#getIpWhitelists}
         * @param ipWhitelists Property ipWhitelists: The IP addresses in the whitelist.
         * @return {@code this}
         */
        public Builder ipWhitelists(java.util.List<? extends java.lang.Object> ipWhitelists) {
            this.ipWhitelists = ipWhitelists;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AclProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AclProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AclProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AclProps {
        private final java.lang.Object actions;
        private final java.lang.Object decision;
        private final java.lang.Object instanceId;
        private final java.lang.Object resourceName;
        private final java.lang.Object resourceType;
        private final java.lang.Object username;
        private final java.lang.Object ipWhitelists;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.actions = software.amazon.jsii.Kernel.get(this, "actions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.decision = software.amazon.jsii.Kernel.get(this, "decision", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceName = software.amazon.jsii.Kernel.get(this, "resourceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceType = software.amazon.jsii.Kernel.get(this, "resourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.username = software.amazon.jsii.Kernel.get(this, "username", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipWhitelists = software.amazon.jsii.Kernel.get(this, "ipWhitelists", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.actions = java.util.Objects.requireNonNull(builder.actions, "actions is required");
            this.decision = java.util.Objects.requireNonNull(builder.decision, "decision is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.resourceName = java.util.Objects.requireNonNull(builder.resourceName, "resourceName is required");
            this.resourceType = java.util.Objects.requireNonNull(builder.resourceType, "resourceType is required");
            this.username = java.util.Objects.requireNonNull(builder.username, "username is required");
            this.ipWhitelists = builder.ipWhitelists;
        }

        @Override
        public final java.lang.Object getActions() {
            return this.actions;
        }

        @Override
        public final java.lang.Object getDecision() {
            return this.decision;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getResourceName() {
            return this.resourceName;
        }

        @Override
        public final java.lang.Object getResourceType() {
            return this.resourceType;
        }

        @Override
        public final java.lang.Object getUsername() {
            return this.username;
        }

        @Override
        public final java.lang.Object getIpWhitelists() {
            return this.ipWhitelists;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("actions", om.valueToTree(this.getActions()));
            data.set("decision", om.valueToTree(this.getDecision()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("resourceName", om.valueToTree(this.getResourceName()));
            data.set("resourceType", om.valueToTree(this.getResourceType()));
            data.set("username", om.valueToTree(this.getUsername()));
            if (this.getIpWhitelists() != null) {
                data.set("ipWhitelists", om.valueToTree(this.getIpWhitelists()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rocketmq5.AclProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AclProps.Jsii$Proxy that = (AclProps.Jsii$Proxy) o;

            if (!actions.equals(that.actions)) return false;
            if (!decision.equals(that.decision)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            if (!resourceName.equals(that.resourceName)) return false;
            if (!resourceType.equals(that.resourceType)) return false;
            if (!username.equals(that.username)) return false;
            return this.ipWhitelists != null ? this.ipWhitelists.equals(that.ipWhitelists) : that.ipWhitelists == null;
        }

        @Override
        public final int hashCode() {
            int result = this.actions.hashCode();
            result = 31 * result + (this.decision.hashCode());
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.resourceName.hashCode());
            result = 31 * result + (this.resourceType.hashCode());
            result = 31 * result + (this.username.hashCode());
            result = 31 * result + (this.ipWhitelists != null ? this.ipWhitelists.hashCode() : 0);
            return result;
        }
    }
}
