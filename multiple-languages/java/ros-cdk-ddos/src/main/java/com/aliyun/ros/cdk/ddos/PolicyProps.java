package com.aliyun.ros.cdk.ddos;

/**
 * Properties for defining a <code>Policy</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-policy
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:06.229Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ddos.$Module.class, fqn = "@alicloud/ros-cdk-ddos.PolicyProps")
@software.amazon.jsii.Jsii.Proxy(PolicyProps.Jsii$Proxy.class)
public interface PolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property policyName: The name of the policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPolicyName();

    /**
     * Property type: The type of the policy.
     * <p>
     * Values:
     * <p>
     * <ul>
     * <li>default: Indicates the default protection strategy.</li>
     * <li>l3: Indicates the IP protection strategy.</li>
     * <li>l4: Indicates the port protection strategy.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

    /**
     * Property actionType: Operation type ActionType = 10 Modify policy name ActionType = 11 Modify whitelist and whitelist timeout ActionType = 12 modify add white high anti-back source network segment switch ActionType = 13 Modify the switch to discard ICMP ActionType = 20 Add black and white list ActionType = 21 Delete whitelist and whitelist ActionType = 22 Clear White List ActionType = 23 Clear the blacklist ActionType = 30 Modify Smart Switch ActionType = 31 Modify regional ban ActionType = 32 Modify Source Speed Limit Black ActionType = 34 Modifying Reflective Port Filtering ActionType = 40,41,42 Create, delete, and modify Port rules ActionType = 50,51,52 Create, delete, and modify fingerprint rules ActionType = 60 switch L4 protection ActionType = 61,62,63 Create, delete, and modify L4 rules.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getActionType() {
        return null;
    }

    /**
     * Property blackIpList: Blacklist list.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBlackIpList() {
        return null;
    }

    /**
     * Property content: Configuration Content.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getContent() {
        return null;
    }

    /**
     * Property whiteIpList: Whitelist IP list.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWhiteIpList() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link PolicyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PolicyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PolicyProps> {
        java.lang.Object policyName;
        java.lang.Object type;
        java.lang.Object actionType;
        java.lang.Object blackIpList;
        java.lang.Object content;
        java.lang.Object whiteIpList;

        /**
         * Sets the value of {@link PolicyProps#getPolicyName}
         * @param policyName Property policyName: The name of the policy. This parameter is required.
         * @return {@code this}
         */
        public Builder policyName(java.lang.String policyName) {
            this.policyName = policyName;
            return this;
        }

        /**
         * Sets the value of {@link PolicyProps#getPolicyName}
         * @param policyName Property policyName: The name of the policy. This parameter is required.
         * @return {@code this}
         */
        public Builder policyName(com.aliyun.ros.cdk.core.IResolvable policyName) {
            this.policyName = policyName;
            return this;
        }

        /**
         * Sets the value of {@link PolicyProps#getType}
         * @param type Property type: The type of the policy. This parameter is required.
         *             Values:
         *             <p>
         *             <ul>
         *             <li>default: Indicates the default protection strategy.</li>
         *             <li>l3: Indicates the IP protection strategy.</li>
         *             <li>l4: Indicates the port protection strategy.</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link PolicyProps#getType}
         * @param type Property type: The type of the policy. This parameter is required.
         *             Values:
         *             <p>
         *             <ul>
         *             <li>default: Indicates the default protection strategy.</li>
         *             <li>l3: Indicates the IP protection strategy.</li>
         *             <li>l4: Indicates the port protection strategy.</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link PolicyProps#getActionType}
         * @param actionType Property actionType: Operation type ActionType = 10 Modify policy name ActionType = 11 Modify whitelist and whitelist timeout ActionType = 12 modify add white high anti-back source network segment switch ActionType = 13 Modify the switch to discard ICMP ActionType = 20 Add black and white list ActionType = 21 Delete whitelist and whitelist ActionType = 22 Clear White List ActionType = 23 Clear the blacklist ActionType = 30 Modify Smart Switch ActionType = 31 Modify regional ban ActionType = 32 Modify Source Speed Limit Black ActionType = 34 Modifying Reflective Port Filtering ActionType = 40,41,42 Create, delete, and modify Port rules ActionType = 50,51,52 Create, delete, and modify fingerprint rules ActionType = 60 switch L4 protection ActionType = 61,62,63 Create, delete, and modify L4 rules.
         * @return {@code this}
         */
        public Builder actionType(java.lang.String actionType) {
            this.actionType = actionType;
            return this;
        }

        /**
         * Sets the value of {@link PolicyProps#getActionType}
         * @param actionType Property actionType: Operation type ActionType = 10 Modify policy name ActionType = 11 Modify whitelist and whitelist timeout ActionType = 12 modify add white high anti-back source network segment switch ActionType = 13 Modify the switch to discard ICMP ActionType = 20 Add black and white list ActionType = 21 Delete whitelist and whitelist ActionType = 22 Clear White List ActionType = 23 Clear the blacklist ActionType = 30 Modify Smart Switch ActionType = 31 Modify regional ban ActionType = 32 Modify Source Speed Limit Black ActionType = 34 Modifying Reflective Port Filtering ActionType = 40,41,42 Create, delete, and modify Port rules ActionType = 50,51,52 Create, delete, and modify fingerprint rules ActionType = 60 switch L4 protection ActionType = 61,62,63 Create, delete, and modify L4 rules.
         * @return {@code this}
         */
        public Builder actionType(com.aliyun.ros.cdk.core.IResolvable actionType) {
            this.actionType = actionType;
            return this;
        }

        /**
         * Sets the value of {@link PolicyProps#getBlackIpList}
         * @param blackIpList Property blackIpList: Blacklist list.
         * @return {@code this}
         */
        public Builder blackIpList(com.aliyun.ros.cdk.core.IResolvable blackIpList) {
            this.blackIpList = blackIpList;
            return this;
        }

        /**
         * Sets the value of {@link PolicyProps#getBlackIpList}
         * @param blackIpList Property blackIpList: Blacklist list.
         * @return {@code this}
         */
        public Builder blackIpList(java.util.List<? extends java.lang.Object> blackIpList) {
            this.blackIpList = blackIpList;
            return this;
        }

        /**
         * Sets the value of {@link PolicyProps#getContent}
         * @param content Property content: Configuration Content.
         * @return {@code this}
         */
        public Builder content(com.aliyun.ros.cdk.core.IResolvable content) {
            this.content = content;
            return this;
        }

        /**
         * Sets the value of {@link PolicyProps#getContent}
         * @param content Property content: Configuration Content.
         * @return {@code this}
         */
        public Builder content(com.aliyun.ros.cdk.ddos.RosPolicy.ContentProperty content) {
            this.content = content;
            return this;
        }

        /**
         * Sets the value of {@link PolicyProps#getWhiteIpList}
         * @param whiteIpList Property whiteIpList: Whitelist IP list.
         * @return {@code this}
         */
        public Builder whiteIpList(com.aliyun.ros.cdk.core.IResolvable whiteIpList) {
            this.whiteIpList = whiteIpList;
            return this;
        }

        /**
         * Sets the value of {@link PolicyProps#getWhiteIpList}
         * @param whiteIpList Property whiteIpList: Whitelist IP list.
         * @return {@code this}
         */
        public Builder whiteIpList(java.util.List<? extends java.lang.Object> whiteIpList) {
            this.whiteIpList = whiteIpList;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link PolicyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PolicyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PolicyProps {
        private final java.lang.Object policyName;
        private final java.lang.Object type;
        private final java.lang.Object actionType;
        private final java.lang.Object blackIpList;
        private final java.lang.Object content;
        private final java.lang.Object whiteIpList;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.policyName = software.amazon.jsii.Kernel.get(this, "policyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.actionType = software.amazon.jsii.Kernel.get(this, "actionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.blackIpList = software.amazon.jsii.Kernel.get(this, "blackIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.content = software.amazon.jsii.Kernel.get(this, "content", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.whiteIpList = software.amazon.jsii.Kernel.get(this, "whiteIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.policyName = java.util.Objects.requireNonNull(builder.policyName, "policyName is required");
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.actionType = builder.actionType;
            this.blackIpList = builder.blackIpList;
            this.content = builder.content;
            this.whiteIpList = builder.whiteIpList;
        }

        @Override
        public final java.lang.Object getPolicyName() {
            return this.policyName;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        public final java.lang.Object getActionType() {
            return this.actionType;
        }

        @Override
        public final java.lang.Object getBlackIpList() {
            return this.blackIpList;
        }

        @Override
        public final java.lang.Object getContent() {
            return this.content;
        }

        @Override
        public final java.lang.Object getWhiteIpList() {
            return this.whiteIpList;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("policyName", om.valueToTree(this.getPolicyName()));
            data.set("type", om.valueToTree(this.getType()));
            if (this.getActionType() != null) {
                data.set("actionType", om.valueToTree(this.getActionType()));
            }
            if (this.getBlackIpList() != null) {
                data.set("blackIpList", om.valueToTree(this.getBlackIpList()));
            }
            if (this.getContent() != null) {
                data.set("content", om.valueToTree(this.getContent()));
            }
            if (this.getWhiteIpList() != null) {
                data.set("whiteIpList", om.valueToTree(this.getWhiteIpList()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ddos.PolicyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PolicyProps.Jsii$Proxy that = (PolicyProps.Jsii$Proxy) o;

            if (!policyName.equals(that.policyName)) return false;
            if (!type.equals(that.type)) return false;
            if (this.actionType != null ? !this.actionType.equals(that.actionType) : that.actionType != null) return false;
            if (this.blackIpList != null ? !this.blackIpList.equals(that.blackIpList) : that.blackIpList != null) return false;
            if (this.content != null ? !this.content.equals(that.content) : that.content != null) return false;
            return this.whiteIpList != null ? this.whiteIpList.equals(that.whiteIpList) : that.whiteIpList == null;
        }

        @Override
        public final int hashCode() {
            int result = this.policyName.hashCode();
            result = 31 * result + (this.type.hashCode());
            result = 31 * result + (this.actionType != null ? this.actionType.hashCode() : 0);
            result = 31 * result + (this.blackIpList != null ? this.blackIpList.hashCode() : 0);
            result = 31 * result + (this.content != null ? this.content.hashCode() : 0);
            result = 31 * result + (this.whiteIpList != null ? this.whiteIpList.hashCode() : 0);
            return result;
        }
    }
}
