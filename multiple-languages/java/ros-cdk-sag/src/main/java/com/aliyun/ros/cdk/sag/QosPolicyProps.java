package com.aliyun.ros.cdk.sag;

/**
 * Properties for defining a `ALIYUN::SAG::QosPolicy`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.68.0 (build b45f2f6)", date = "2022-09-23T09:09:11.575Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.QosPolicyProps")
@software.amazon.jsii.Jsii.Proxy(QosPolicyProps.Jsii$Proxy.class)
public interface QosPolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property destCidr: The range of the destination IP addresses.
     * <p>
     * Specify the value of this parameter in CIDR notation. Example: 192.168.10.0/24.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDestCidr();

    /**
     * Property destPortRange: The range of destination ports.
     * <p>
     * Valid values: 1 to 65535 and -1.
     * Set this parameter in one of the following formats:
     * 1/200: a port range from 1 to 200
     * 80/80: port 80
     * -1/-1: all ports
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDestPortRange();

    /**
     * Property ipProtocol: The type of the protocol that applies to the traffic classification rule.
     * <p>
     * The supported protocols provided in this topic are for reference only. The actual
     * protocols in the console shall prevail.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getIpProtocol();

    /**
     * Property priority: The priority of the traffic throttling policy to which the traffic classification rule belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPriority();

    /**
     * Property qosId: The ID of the QoS policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getQosId();

    /**
     * Property sourceCidr: The range of the source IP addresses.
     * <p>
     * Specify the value of this parameter in CIDR notation. Example: 192.168.1.0/24.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceCidr();

    /**
     * Property sourcePortRange: The range of source ports.
     * <p>
     * Valid values: 1 to 65535 and -1.
     * Set this parameter in one of the following formats:
     * 1/200: a port range from 1 to 200
     * 80/80: port 80
     * -1/-1: all ports
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourcePortRange();

    /**
     * Property description: The description of the traffic classification rule.
     * <p>
     * The description must be 1 to 512 characters in length and can contain letters, digits,
     * underscores (_), and hyphens (-). It must start with a letter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property dpiGroupIds: The ID of the application group.
     * <p>
     * You can enter at most 100 application group IDs at a time.
     * You can call the ListDpiGroups operation to query application group IDs and information about the applications.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDpiGroupIds() {
        return null;
    }

    /**
     * Property dpiSignatureIds: The ID of the application.
     * <p>
     * You can enter at most 100 application IDs at a time.
     * You can call the ListDpiSignatures operation to query application IDs and information about the applications.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDpiSignatureIds() {
        return null;
    }

    /**
     * Property endTime: The time when the traffic classification rule becomes invalid.
     * <p>
     * Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
     * The time must be in UTC+8.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndTime() {
        return null;
    }

    /**
     * Property name: The name of the traffic classification rule.
     * <p>
     * The name must be 2 to 100 characters in length, and can contain digits, underscores
     * (_), and hyphens (-). It must start with a letter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * Property startTime: The time when the traffic classification rule takes effect.
     * <p>
     * Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
     * The time must be in UTC+8.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStartTime() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link QosPolicyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link QosPolicyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<QosPolicyProps> {
        java.lang.Object destCidr;
        java.lang.Object destPortRange;
        java.lang.Object ipProtocol;
        java.lang.Object priority;
        java.lang.Object qosId;
        java.lang.Object sourceCidr;
        java.lang.Object sourcePortRange;
        java.lang.Object description;
        java.lang.Object dpiGroupIds;
        java.lang.Object dpiSignatureIds;
        java.lang.Object endTime;
        java.lang.Object name;
        java.lang.Object startTime;

        /**
         * Sets the value of {@link QosPolicyProps#getDestCidr}
         * @param destCidr Property destCidr: The range of the destination IP addresses. This parameter is required.
         *                 Specify the value of this parameter in CIDR notation. Example: 192.168.10.0/24.
         * @return {@code this}
         */
        public Builder destCidr(java.lang.String destCidr) {
            this.destCidr = destCidr;
            return this;
        }

        /**
         * Sets the value of {@link QosPolicyProps#getDestCidr}
         * @param destCidr Property destCidr: The range of the destination IP addresses. This parameter is required.
         *                 Specify the value of this parameter in CIDR notation. Example: 192.168.10.0/24.
         * @return {@code this}
         */
        public Builder destCidr(com.aliyun.ros.cdk.core.IResolvable destCidr) {
            this.destCidr = destCidr;
            return this;
        }

        /**
         * Sets the value of {@link QosPolicyProps#getDestPortRange}
         * @param destPortRange Property destPortRange: The range of destination ports. This parameter is required.
         *                      Valid values: 1 to 65535 and -1.
         *                      Set this parameter in one of the following formats:
         *                      1/200: a port range from 1 to 200
         *                      80/80: port 80
         *                      -1/-1: all ports
         * @return {@code this}
         */
        public Builder destPortRange(java.lang.String destPortRange) {
            this.destPortRange = destPortRange;
            return this;
        }

        /**
         * Sets the value of {@link QosPolicyProps#getDestPortRange}
         * @param destPortRange Property destPortRange: The range of destination ports. This parameter is required.
         *                      Valid values: 1 to 65535 and -1.
         *                      Set this parameter in one of the following formats:
         *                      1/200: a port range from 1 to 200
         *                      80/80: port 80
         *                      -1/-1: all ports
         * @return {@code this}
         */
        public Builder destPortRange(com.aliyun.ros.cdk.core.IResolvable destPortRange) {
            this.destPortRange = destPortRange;
            return this;
        }

        /**
         * Sets the value of {@link QosPolicyProps#getIpProtocol}
         * @param ipProtocol Property ipProtocol: The type of the protocol that applies to the traffic classification rule. This parameter is required.
         *                   The supported protocols provided in this topic are for reference only. The actual
         *                   protocols in the console shall prevail.
         * @return {@code this}
         */
        public Builder ipProtocol(java.lang.String ipProtocol) {
            this.ipProtocol = ipProtocol;
            return this;
        }

        /**
         * Sets the value of {@link QosPolicyProps#getIpProtocol}
         * @param ipProtocol Property ipProtocol: The type of the protocol that applies to the traffic classification rule. This parameter is required.
         *                   The supported protocols provided in this topic are for reference only. The actual
         *                   protocols in the console shall prevail.
         * @return {@code this}
         */
        public Builder ipProtocol(com.aliyun.ros.cdk.core.IResolvable ipProtocol) {
            this.ipProtocol = ipProtocol;
            return this;
        }

        /**
         * Sets the value of {@link QosPolicyProps#getPriority}
         * @param priority Property priority: The priority of the traffic throttling policy to which the traffic classification rule belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder priority(java.lang.Number priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link QosPolicyProps#getPriority}
         * @param priority Property priority: The priority of the traffic throttling policy to which the traffic classification rule belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder priority(com.aliyun.ros.cdk.core.IResolvable priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link QosPolicyProps#getQosId}
         * @param qosId Property qosId: The ID of the QoS policy. This parameter is required.
         * @return {@code this}
         */
        public Builder qosId(java.lang.String qosId) {
            this.qosId = qosId;
            return this;
        }

        /**
         * Sets the value of {@link QosPolicyProps#getQosId}
         * @param qosId Property qosId: The ID of the QoS policy. This parameter is required.
         * @return {@code this}
         */
        public Builder qosId(com.aliyun.ros.cdk.core.IResolvable qosId) {
            this.qosId = qosId;
            return this;
        }

        /**
         * Sets the value of {@link QosPolicyProps#getSourceCidr}
         * @param sourceCidr Property sourceCidr: The range of the source IP addresses. This parameter is required.
         *                   Specify the value of this parameter in CIDR notation. Example: 192.168.1.0/24.
         * @return {@code this}
         */
        public Builder sourceCidr(java.lang.String sourceCidr) {
            this.sourceCidr = sourceCidr;
            return this;
        }

        /**
         * Sets the value of {@link QosPolicyProps#getSourceCidr}
         * @param sourceCidr Property sourceCidr: The range of the source IP addresses. This parameter is required.
         *                   Specify the value of this parameter in CIDR notation. Example: 192.168.1.0/24.
         * @return {@code this}
         */
        public Builder sourceCidr(com.aliyun.ros.cdk.core.IResolvable sourceCidr) {
            this.sourceCidr = sourceCidr;
            return this;
        }

        /**
         * Sets the value of {@link QosPolicyProps#getSourcePortRange}
         * @param sourcePortRange Property sourcePortRange: The range of source ports. This parameter is required.
         *                        Valid values: 1 to 65535 and -1.
         *                        Set this parameter in one of the following formats:
         *                        1/200: a port range from 1 to 200
         *                        80/80: port 80
         *                        -1/-1: all ports
         * @return {@code this}
         */
        public Builder sourcePortRange(java.lang.String sourcePortRange) {
            this.sourcePortRange = sourcePortRange;
            return this;
        }

        /**
         * Sets the value of {@link QosPolicyProps#getSourcePortRange}
         * @param sourcePortRange Property sourcePortRange: The range of source ports. This parameter is required.
         *                        Valid values: 1 to 65535 and -1.
         *                        Set this parameter in one of the following formats:
         *                        1/200: a port range from 1 to 200
         *                        80/80: port 80
         *                        -1/-1: all ports
         * @return {@code this}
         */
        public Builder sourcePortRange(com.aliyun.ros.cdk.core.IResolvable sourcePortRange) {
            this.sourcePortRange = sourcePortRange;
            return this;
        }

        /**
         * Sets the value of {@link QosPolicyProps#getDescription}
         * @param description Property description: The description of the traffic classification rule.
         *                    The description must be 1 to 512 characters in length and can contain letters, digits,
         *                    underscores (_), and hyphens (-). It must start with a letter.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link QosPolicyProps#getDescription}
         * @param description Property description: The description of the traffic classification rule.
         *                    The description must be 1 to 512 characters in length and can contain letters, digits,
         *                    underscores (_), and hyphens (-). It must start with a letter.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link QosPolicyProps#getDpiGroupIds}
         * @param dpiGroupIds Property dpiGroupIds: The ID of the application group.
         *                    You can enter at most 100 application group IDs at a time.
         *                    You can call the ListDpiGroups operation to query application group IDs and information about the applications.
         * @return {@code this}
         */
        public Builder dpiGroupIds(com.aliyun.ros.cdk.core.IResolvable dpiGroupIds) {
            this.dpiGroupIds = dpiGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link QosPolicyProps#getDpiGroupIds}
         * @param dpiGroupIds Property dpiGroupIds: The ID of the application group.
         *                    You can enter at most 100 application group IDs at a time.
         *                    You can call the ListDpiGroups operation to query application group IDs and information about the applications.
         * @return {@code this}
         */
        public Builder dpiGroupIds(java.util.List<? extends java.lang.Object> dpiGroupIds) {
            this.dpiGroupIds = dpiGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link QosPolicyProps#getDpiSignatureIds}
         * @param dpiSignatureIds Property dpiSignatureIds: The ID of the application.
         *                        You can enter at most 100 application IDs at a time.
         *                        You can call the ListDpiSignatures operation to query application IDs and information about the applications.
         * @return {@code this}
         */
        public Builder dpiSignatureIds(com.aliyun.ros.cdk.core.IResolvable dpiSignatureIds) {
            this.dpiSignatureIds = dpiSignatureIds;
            return this;
        }

        /**
         * Sets the value of {@link QosPolicyProps#getDpiSignatureIds}
         * @param dpiSignatureIds Property dpiSignatureIds: The ID of the application.
         *                        You can enter at most 100 application IDs at a time.
         *                        You can call the ListDpiSignatures operation to query application IDs and information about the applications.
         * @return {@code this}
         */
        public Builder dpiSignatureIds(java.util.List<? extends java.lang.Object> dpiSignatureIds) {
            this.dpiSignatureIds = dpiSignatureIds;
            return this;
        }

        /**
         * Sets the value of {@link QosPolicyProps#getEndTime}
         * @param endTime Property endTime: The time when the traffic classification rule becomes invalid.
         *                Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
         *                The time must be in UTC+8.
         * @return {@code this}
         */
        public Builder endTime(java.lang.String endTime) {
            this.endTime = endTime;
            return this;
        }

        /**
         * Sets the value of {@link QosPolicyProps#getEndTime}
         * @param endTime Property endTime: The time when the traffic classification rule becomes invalid.
         *                Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
         *                The time must be in UTC+8.
         * @return {@code this}
         */
        public Builder endTime(com.aliyun.ros.cdk.core.IResolvable endTime) {
            this.endTime = endTime;
            return this;
        }

        /**
         * Sets the value of {@link QosPolicyProps#getName}
         * @param name Property name: The name of the traffic classification rule.
         *             The name must be 2 to 100 characters in length, and can contain digits, underscores
         *             (_), and hyphens (-). It must start with a letter.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link QosPolicyProps#getName}
         * @param name Property name: The name of the traffic classification rule.
         *             The name must be 2 to 100 characters in length, and can contain digits, underscores
         *             (_), and hyphens (-). It must start with a letter.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link QosPolicyProps#getStartTime}
         * @param startTime Property startTime: The time when the traffic classification rule takes effect.
         *                  Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
         *                  The time must be in UTC+8.
         * @return {@code this}
         */
        public Builder startTime(java.lang.String startTime) {
            this.startTime = startTime;
            return this;
        }

        /**
         * Sets the value of {@link QosPolicyProps#getStartTime}
         * @param startTime Property startTime: The time when the traffic classification rule takes effect.
         *                  Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
         *                  The time must be in UTC+8.
         * @return {@code this}
         */
        public Builder startTime(com.aliyun.ros.cdk.core.IResolvable startTime) {
            this.startTime = startTime;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link QosPolicyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public QosPolicyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link QosPolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements QosPolicyProps {
        private final java.lang.Object destCidr;
        private final java.lang.Object destPortRange;
        private final java.lang.Object ipProtocol;
        private final java.lang.Object priority;
        private final java.lang.Object qosId;
        private final java.lang.Object sourceCidr;
        private final java.lang.Object sourcePortRange;
        private final java.lang.Object description;
        private final java.lang.Object dpiGroupIds;
        private final java.lang.Object dpiSignatureIds;
        private final java.lang.Object endTime;
        private final java.lang.Object name;
        private final java.lang.Object startTime;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.destCidr = software.amazon.jsii.Kernel.get(this, "destCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destPortRange = software.amazon.jsii.Kernel.get(this, "destPortRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipProtocol = software.amazon.jsii.Kernel.get(this, "ipProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.qosId = software.amazon.jsii.Kernel.get(this, "qosId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceCidr = software.amazon.jsii.Kernel.get(this, "sourceCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourcePortRange = software.amazon.jsii.Kernel.get(this, "sourcePortRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dpiGroupIds = software.amazon.jsii.Kernel.get(this, "dpiGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dpiSignatureIds = software.amazon.jsii.Kernel.get(this, "dpiSignatureIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endTime = software.amazon.jsii.Kernel.get(this, "endTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.startTime = software.amazon.jsii.Kernel.get(this, "startTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.destCidr = java.util.Objects.requireNonNull(builder.destCidr, "destCidr is required");
            this.destPortRange = java.util.Objects.requireNonNull(builder.destPortRange, "destPortRange is required");
            this.ipProtocol = java.util.Objects.requireNonNull(builder.ipProtocol, "ipProtocol is required");
            this.priority = java.util.Objects.requireNonNull(builder.priority, "priority is required");
            this.qosId = java.util.Objects.requireNonNull(builder.qosId, "qosId is required");
            this.sourceCidr = java.util.Objects.requireNonNull(builder.sourceCidr, "sourceCidr is required");
            this.sourcePortRange = java.util.Objects.requireNonNull(builder.sourcePortRange, "sourcePortRange is required");
            this.description = builder.description;
            this.dpiGroupIds = builder.dpiGroupIds;
            this.dpiSignatureIds = builder.dpiSignatureIds;
            this.endTime = builder.endTime;
            this.name = builder.name;
            this.startTime = builder.startTime;
        }

        @Override
        public final java.lang.Object getDestCidr() {
            return this.destCidr;
        }

        @Override
        public final java.lang.Object getDestPortRange() {
            return this.destPortRange;
        }

        @Override
        public final java.lang.Object getIpProtocol() {
            return this.ipProtocol;
        }

        @Override
        public final java.lang.Object getPriority() {
            return this.priority;
        }

        @Override
        public final java.lang.Object getQosId() {
            return this.qosId;
        }

        @Override
        public final java.lang.Object getSourceCidr() {
            return this.sourceCidr;
        }

        @Override
        public final java.lang.Object getSourcePortRange() {
            return this.sourcePortRange;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDpiGroupIds() {
            return this.dpiGroupIds;
        }

        @Override
        public final java.lang.Object getDpiSignatureIds() {
            return this.dpiSignatureIds;
        }

        @Override
        public final java.lang.Object getEndTime() {
            return this.endTime;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getStartTime() {
            return this.startTime;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("destCidr", om.valueToTree(this.getDestCidr()));
            data.set("destPortRange", om.valueToTree(this.getDestPortRange()));
            data.set("ipProtocol", om.valueToTree(this.getIpProtocol()));
            data.set("priority", om.valueToTree(this.getPriority()));
            data.set("qosId", om.valueToTree(this.getQosId()));
            data.set("sourceCidr", om.valueToTree(this.getSourceCidr()));
            data.set("sourcePortRange", om.valueToTree(this.getSourcePortRange()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDpiGroupIds() != null) {
                data.set("dpiGroupIds", om.valueToTree(this.getDpiGroupIds()));
            }
            if (this.getDpiSignatureIds() != null) {
                data.set("dpiSignatureIds", om.valueToTree(this.getDpiSignatureIds()));
            }
            if (this.getEndTime() != null) {
                data.set("endTime", om.valueToTree(this.getEndTime()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getStartTime() != null) {
                data.set("startTime", om.valueToTree(this.getStartTime()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sag.QosPolicyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            QosPolicyProps.Jsii$Proxy that = (QosPolicyProps.Jsii$Proxy) o;

            if (!destCidr.equals(that.destCidr)) return false;
            if (!destPortRange.equals(that.destPortRange)) return false;
            if (!ipProtocol.equals(that.ipProtocol)) return false;
            if (!priority.equals(that.priority)) return false;
            if (!qosId.equals(that.qosId)) return false;
            if (!sourceCidr.equals(that.sourceCidr)) return false;
            if (!sourcePortRange.equals(that.sourcePortRange)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.dpiGroupIds != null ? !this.dpiGroupIds.equals(that.dpiGroupIds) : that.dpiGroupIds != null) return false;
            if (this.dpiSignatureIds != null ? !this.dpiSignatureIds.equals(that.dpiSignatureIds) : that.dpiSignatureIds != null) return false;
            if (this.endTime != null ? !this.endTime.equals(that.endTime) : that.endTime != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            return this.startTime != null ? this.startTime.equals(that.startTime) : that.startTime == null;
        }

        @Override
        public final int hashCode() {
            int result = this.destCidr.hashCode();
            result = 31 * result + (this.destPortRange.hashCode());
            result = 31 * result + (this.ipProtocol.hashCode());
            result = 31 * result + (this.priority.hashCode());
            result = 31 * result + (this.qosId.hashCode());
            result = 31 * result + (this.sourceCidr.hashCode());
            result = 31 * result + (this.sourcePortRange.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.dpiGroupIds != null ? this.dpiGroupIds.hashCode() : 0);
            result = 31 * result + (this.dpiSignatureIds != null ? this.dpiSignatureIds.hashCode() : 0);
            result = 31 * result + (this.endTime != null ? this.endTime.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.startTime != null ? this.startTime.hashCode() : 0);
            return result;
        }
    }
}
